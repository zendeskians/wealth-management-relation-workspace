import base64
from os import path

from docusign_esign import (
    Document,
    Email,
    EnvelopeDefinition,
    InitialHere,
    Recipients,
    Signer,
    SignHere,
    Tabs,
)
from ds_config import TPL_PATH
from jinja2 import BaseLoader, Environment


class DsDocument:
    @classmethod
    def create(cls, tpl, client, envelope_args):
        """Creates envelope
        Parameters:
            tpl (str): template path for the document
            client (dict): client information
            envelope_args (dict): parameters of the document
        Returns:
            EnvelopeDefinition object that will be submitted to Docusign
        """
        with open(path.join(TPL_PATH, tpl), "r") as file:
            content_bytes = file.read()

        content_bytes = (
            Environment(loader=BaseLoader)
            .from_string(content_bytes)
            .render(
                first_name=client["first_name"],
                last_name=client["last_name"],
                email=client["email"],
            )
        )
        base64_file_content = base64.b64encode(bytes(content_bytes, "utf-8")).decode(
            "ascii"
        )

        # Create the document model
        document = Document(  # Create the DocuSign document object
            document_base64=base64_file_content,
            name="Change investment plan",
            file_extension="html",
            document_id=1,  # any number is fine
        )

        # Create the signer recipient model
        signer = Signer(  # The signer
            email=client["email"],
            name=f"{client['first_name']} {client['last_name']}",
            recipient_id="1",
            routing_order="1",
            # Setting the client_user_id marks the signer as embedded
            client_user_id=envelope_args["signer_client_id"],
        )

        # Create a SignHere tab (field on the document)
        sign_here = SignHere(
            anchor_string="/signature_1/",
            anchor_units="pixels",
            anchor_y_offset="10",
            anchor_x_offset="20",
        )

        # Create a InitialHere tab
        initial_here = InitialHere(
            anchor_string="/initials_1/",
            anchor_units="pixels",
            anchor_y_offset="10",
            anchor_x_offset="20",
        )

        # Create an Email field
        email = Email(
            document_id="1",
            page_number="1",
            anchor_string="/email/",
            anchor_units="pixels",
            required=True,
            value=client["email"],
            locked=False,
            anchor_y_offset="-5",
        )
        signer.tabs = Tabs(
            sign_here_tabs=[sign_here],
            email_tabs=[email],
            initial_here_tabs=[initial_here],
        )

        # Create the top-level envelope definition and populate it
        envelope_definition = EnvelopeDefinition(
            email_subject="Change minor/major field",
            documents=[document],
            # The Recipients object takes arrays for each recipient type
            recipients=Recipients(signers=[signer]),
            status="sent",  # Requests that the envelope be created and sent
        )

        return envelope_definition
