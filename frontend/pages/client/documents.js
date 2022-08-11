import "antd/dist/antd.css";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import PortfolioPerformance from "../../components/PortfolioPerformance";
import Sidebar from "../../components/Sidebar";
import PieChart from "../../components/PieChart";
import DOCUMENTS from "../../components/Documents/templates";
const { Header, Sider, Content } = Layout;
import Image from "next/image";

// const initialState = {
//     errors: [],
//     request: {
//       firstName: "",
//       lastName: "",

//       minorField: "",
//       majorField: ""
//     }
//   };

//   export const RequestMajorMinorChangePage = () => {
//     const { t } = useTranslation("RequestMajorMinor");
//     const [state, dispatch] = useReducer(reducer, initialState);
//     const [request, setRequestData] = useState({ ...initialState.request });
//     const [requesting, setRequesting] = useState(false);
//     const [errors, setErrors] = useState({});
//     const courses = t("Courses", { returnObjects: true });
//     const { logged, setLogged, setAuthType } = useContext(LoggedUserContext);

//     useEffect(() => {
//       checkUnlogged(logged, setLogged, setAuthType);
//     })

//     async function handleSave(event) {
//       event.preventDefault();
//       if (!formIsValid()) {
//         return;
//       }
//       const body = {
//         "callback-url": process.env.REACT_APP_DS_RETURN_URL + "/signing_complete",
//         student: {
//           first_name: request.firstName,
//           last_name: request.lastName,
//           email: request.email,
//           minor: request.minorField,
//           major: request.majorField
//         }
//       };
//       setRequesting(true);
//       try {
//         const savedRequest = await studentsAPI.requestMinorChange(body);
//         dispatch({
//           type: SEND_REQEUST_SUCCESS,
//           payload: {
//             envelopeId: savedRequest.envelope_id,
//             redirectUrl: savedRequest.redirect_url
//           }
//         });
//       } catch (error) {
//         setErrors({ ...errors, onSave: error.message });
//       } finally {
//         setRequesting(false);
//       }
//     }

//     function handleChange(event) {
//       const { name, value } = event.target;
//       const { [name]: removed, ...updatedErrors } = errors;
//       setErrors(updatedErrors);
//       setRequestData(request => ({
//         ...request,
//         [name]: value
//       }));
//     }

//     function handleSelect(event) {
//       const { name, value } = event.target;
//       const { [name]: removed, ...updatedErrors } = errors;
//       setErrors(updatedErrors);
//       setRequestData(request => ({
//         ...request,
//         [name]: courses[value]
//       }));
//     }

//     function formIsValid() {
//       const { firstName, lastName, email, majorField, minorField } = request;
//       const errors = {};
//       if (!firstName) {
//         errors.firstName = t("Error.FirstName");
//       }
//       if (!lastName) {
//         errors.lastName = t("Error.LastName");
//       }
//       if (!email) {
//         errors.email = t("Error.Email");
//       }
//       if (!majorField && !minorField) {
//         errors.majorField = t("Error.MajorField");
//         errors.minorField = t("Error.MinorField");
//       }

//       setErrors(errors);
//       return Object.keys(errors).length === 0;
//     }

export default function Documents() {
  const renderDocumentCards = DOCUMENTS.map((document) => {
    return (
      <div
        className="flex-none w-full sm:w-1/3 p-5 snap-center hover:shadow-xl hover:scale-105 duration-300"
        key={document.name}
      >
        <div className="relative aspect-video overflow-hidden">
          <Image
            className="object-cover"
            src={document.image}
            alt={document.name}
            layout='fill'
          />
        </div>
        <div className="py-2">
          <div className="space-y-2">
            {/* <p className="font-light text-sm">
              {project.projectOutcome.toUpperCase()}
            </p> */}
            <h3 className="text-3xl sm:text-4xl mb-2">
              {document.name}
            </h3>
            <p className="text-md">
              {document.description}
            </p>
          </div>
        </div>
      </div>
    )
  });

  return (
    <Layout>
      <Sidebar selected = "4"/>
      <Layout className="site-layout  ">
        <Content
          className="site-layout-background h-screen flex-col items-center w-full"
          style={{
            margin: "24px 16px",
            padding: 24,
          }}
        >
          {/* This is where the main stuff of the page should go */}
          DOCUMENTS FILLER
          <div
          id="scrollContainer"
          className="container-snap flex flex-row flex-no-wrap space-x-10 m-10 sm:col-span-3"
          >
            {renderDocumentCards}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
