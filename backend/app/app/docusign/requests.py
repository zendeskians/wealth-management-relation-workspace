from docusign_esign import ApiException
from flask import Blueprint, jsonify, request, session
from flask_cors import cross_origin

from utils import process_error, check_token
from document import DsDocument
from envelope import Envelope

requests = Blueprint('requests', __name__)


@requests.route('/requests/plan', methods=['POST'])
@cross_origin()
@check_token
def investment_plan():
    """Request for investment plan change"""
    try:
        req_json = request.get_json(force=True)
    except TypeError:
        return jsonify(message='Invalid json input'), 400

    client = req_json['client']
    envelope_args = {
        'signer_client_id': 1000,
        'ds_return_url': req_json['callback-url']
    }

    try:
        # Create envelope
        envelope = DsDocument.create('investment-plan.html', client, envelope_args)
        # Submit envelope to the Docusign
        envelope_id = Envelope.send(envelope, session)
    except ApiException as exc:
        return process_error(exc)

    user_documents = session.get('ds_documents')
    if not user_documents:
        session['ds_documents'] = [envelope_id]
    else:
        session['ds_documents'].append(envelope_id)

    # TODO: upload to firebase/ send to WM

    try:
        # Get the recipient view
        result = Envelope.get_view(envelope_id, envelope_args, client, session)
    except ApiException as exc:
        return process_error(exc)
    return jsonify({'envelope_id': envelope_id, 'redirect_url': result.url})