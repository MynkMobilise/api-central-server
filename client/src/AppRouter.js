import Full from "./layouts/full/Full.js";
import {
  BrowserRouter,
  Navigate,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard.js";
import Login from "./pages/auth/Login.js";
import PageNotFound from "./pages/others/PageNotFound.js";
// import Org from "./pages/Setups/Org.js";
// import OrgMapping from "./pages/Setups/Org-mapping.js";
// import GeneralApi from "./pages/apis/generalApi.js";
// import Services from "./pages/Services/Services.js";
import SpeechStudioDashboard from "./pages/Studios/SpeechStudio/SpeechStudioDashboard.js";
import Blank from "./layouts/blank/Blank.js";
import DocumentStudioDashbaord from "./pages/Studios/DocumentStudio/DocumentStudioDashbaord.js";
import TextToSpeech from "./pages/Studios/SpeechStudio/TextToSpeech/TextToSpeech.js";
import ImageToSpeech from "./pages/Studios/SpeechStudio/ImageToSpeech/ImageToSpeech.js";
import OCREDashboard from "./pages/ocr/OCREDashboard.js";
import OcrBDashboard from "./pages/ocr/OcrBDashboard.js";
import OcrBLandingScreen from "./pages/ocr/OcrBLandingScreen.js";
import AadharOcr from "./pages/ocr/components/AadharOcr.js";
import PanOCR from "./pages/ocr/components/PanOCR.js";
import OcrLandingScreen from "./pages/ocr/OcrLandingScreen.js";
import DocOutput from "./pages/ocr/DocOutput.js";
import Facestudiodashboard from "./pages/Studios/FaceStudio/Facestudiodashboard.js";
import { Detectface } from "./pages/Studios/FaceStudio/face-api/Detectface.js";
import Customvisiondashboard from "./pages/Studios/CustomVision/Customvisiondashboard.js";
import { Imagetotextocr } from "./pages/Studios/CustomVision/ocr/Imagetotextocr.js";
import { Imagecaptions } from "./pages/Studios/CustomVision/Imageanalyis/Imagecaptions.js";
import { ImageTags } from "./pages/Studios/CustomVision/Imageanalyis/ImageTags.js";
import { Imagedetect } from "./pages/Studios/CustomVision/Imageanalyis/Imagedetect.js";

import { viewBusinessOCR } from "./pages/ocr/components/viewBusinessOCR.js";
import DocumentRouting from "./pages/Studios/DocumentStudio/DocumentRouting.js";
import InvoiceOcr from "./pages/Studios/DocumentStudio/InvoiceOcr/InvoiceOcr.js";
import IdCardOcr from "./pages/Studios/DocumentStudio/IdCardOcr/IdCardOcr.js";
import ReceiptOcr from "./pages/Studios/DocumentStudio/ReceiptOcr/ReceiptOcr.js";
import HealthInsurance from "./pages/Studios/DocumentStudio/HealthInsurance/HealthInsurance.js";
import TaxOcr from "./pages/Studios/DocumentStudio/TaxOcr/TaxOcr.js";
import BusinessCard from "./pages/Studios/DocumentStudio/BusinessCard/BusinessCard.js";
import GeneralDocument from "./pages/Studios/DocumentStudio/GeneralDocument/GeneralDocument.js";
import ReadOcr from "./pages/Studios/DocumentStudio/ReadOcr/ReadOcr.js";
import Layouts from "./pages/Studios/DocumentStudio/Layouts/Layouts.js";
import LanguageStudioRouting from "./pages/Studios/LanguageStudio/LanguageStudioRouting.js";
import LanguageStudioDashboard from "./pages/Studios/LanguageStudio/LanguageStudioDashboard.js";
import TranslateText from "./pages/Studios/LanguageStudio/TranslateText/TranslateText.js";
import TextAnalyzer from "./pages/Studios/LanguageStudio/TextAnalyzer/TextAnalyzer.js";
import NamedEntityRecognization from "./pages/Studios/LanguageStudio/NamedEntityRecognization/NamedEntityRecognization.js";
import SpeechToText from "./pages/Studios/SpeechStudio/SpeechToText/SpeechToText.js";
// import { viewBusinessOCR } from "./pages/ocr/components/viewBusinessOCR.js";
import GSTOCR from "../src/pages/ocr/BusinessComponents/GSTOCR.js";
import GSTNoVerify from "../src/pages/ocr/BusinessComponents/GSTNoVerify.js";
import FssaiVerification from "../src/pages/ocr/BusinessComponents/FssaiVerification.js";
import EPFOVerification from "../src/pages/ocr/BusinessComponents/EPFOVerification.js";
import McaCompanyVerification from "../src/pages/ocr/BusinessComponents/McaCompanyVerification.js";
import UdhyogAadhar from "../src/pages/ocr/BusinessComponents/UdhyogAadhar.js";
import Chatstudio from "./pages/Studios/ChatStudio/Chatstudio.js";
import { Chatgptdesc } from "./pages/Studios/ChatStudio/Header/Chatgptdesc.js";

import PanVar from "./pages/ocr/components/PanVar.js";

import Panaadhar from "./pages/ocr/components/Panaadhar.js";
import PassportOcr from "./pages/ocr/components/PassportOcr.js";
import PassportVer from "./pages/ocr/components/PassportVer.js";
import IntPassportOcr from "./pages/ocr/components/IntPassportOcr.js";
import ChequeOcr from "./pages/ocr/components/ChequeOcr.js";
import BankVer from "./pages/ocr/components/BankVer.js";
import BankStatementAnalysis from "./pages/ocr/components/BankStatementAnalysis.js";
import { UanCheck } from "./pages/ocr/components/UanCheck.js";

import { SignatureExtract } from "./pages/ocr/components/SignatureExtract.js";
import { VoterIdVerification } from "./pages/ocr/components/VoterIdVerification.js";
import { VoterOcr } from "./pages/ocr/components/VoterOcr.js";
import { DlOcr } from "./pages/ocr/components/DlOcr.js";
import { ESICAuth } from "./pages/ocr/components/ESICAuth.js";
import { AadhaarTemp } from "./pages/ocr/components/AadhaarTemp.js";
import Org from "./pages/Setups/Org.js";
import OrgMapping from "./pages/Setups/OrgMapping.js";
import Roles from "./pages/Setups/Roles.js";
import Token from "./pages/Setups/Token.js";
import Users from "./pages/Setups/Users.js";
import InvOcr from "./pages/Studios/OurStudio/InvOcr.js";
import AISearch from "./pages/Studios/AISearch/AISearch.js";

const router = createBrowserRouter([
  {
    path: "",
    element: <Blank />,
    children: [
      {
        path: "",
        element: <Login />,
      },
    ],
  },
  {
    path: "",
    element: <Full />,
    children: [
      {
        path: "/dashboard",
        element: <DocumentStudioDashbaord />,
      },
      {
        path: "/setups/org",
        element: <Org />,
      },
      {
        path: "/setups/org-mapping",
        element: <OrgMapping />,
      },
      {
        path: "/setups/roles",
        element: <Roles />,
      },
      {
        path: "/setups/tokens",
        element: <Token />,
      },
      {
        path: "/setups/users",
        element: <Users />,
      },
      {
        path: "/speech-studio",
        element: <SpeechStudioDashboard />,
      },
      {
        path: "speech-studio/text-to-speech",
        element: <TextToSpeech />,
      },
      {
        path: "speech-studio/speech-to-text",
        element: <SpeechToText />,
      },
      {
        path: "speech-studio/image-to-speech",
        element: <ImageToSpeech />,
      },
      {
        path: "ai-search",
        element: <AISearch />,
      },
      {
        path: "/document-studio",
        element: <DocumentRouting />,
        children: [
          {
            path: "",
            element: <DocumentStudioDashbaord />,
          },
          {
            path: "invoice-ocr",
            element: <InvoiceOcr />,
          },
          {
            path: "identity-ocr",
            element: <IdCardOcr />,
          },
          {
            path: "receipt-ocr",
            element: <ReceiptOcr />,
          },
          {
            path: "health-ocr",
            element: <HealthInsurance />,
          },
          {
            path: "tax-ocr",
            element: <TaxOcr />,
          },
          {
            path: "business-card-ocr",
            element: <BusinessCard />,
          },
          {
            path: "general-doc-ocr",
            element: <GeneralDocument />,
          },
          {
            path: "read-to-ocr",
            element: <ReadOcr />,
          },
          {
            path: "layouts",
            element: <Layouts />,
          },
        ],
      },
      {
        path: "/language-studio",
        element: <LanguageStudioRouting />,
        children: [
          {
            path: "",
            element: <LanguageStudioDashboard />,
          },
          {
            path: "translate-text",
            element: <TranslateText />,
          },
          {
            path: "text-analyzer",
            element: <TextAnalyzer />,
          },
          {
            path: "text-ner",
            element: <NamedEntityRecognization />,
          },
        ],
      },
      //   {
      //     path: "/ocr_e_dashboard",
      //     element: <OCREDashboard />,
      //   },
      {
        path: "/ocr_e_dashboard/viewEmployee",
        element: <viewEmployeeOCR />,
      },
      // {
      //   path: "/ocr_b_dashboard",
      //   element: <OcrBDashboard />,
      // },
      {
        path: "/ocr_e_dashboard/viewBusiness",
        element: <viewBusinessOCR />,
      },
      {
        path: "/ocr_e_dashboard",
        element: <OcrLandingScreen />,
        children: [
          {
            path: "",
            element: <OCREDashboard />,
          },
          {
            path: "aadharOcr",
            element: <AadharOcr />,
          },
          {
            path: "outputComponent",
            element: <DocOutput />,
          },
          {
            path: "panOCR",
            element: <PanOCR />,
          },
          {
            path: "panVar",
            element: <PanVar />,
          },
          {
            path: "panAadharLink",
            element: <Panaadhar />,
          },
          {
            path: "passportOcr",
            element: <PassportOcr />,
          },
          {
            path: "passportVer",
            element: <PassportVer />,
          },
          {
            path: "intPassportOcr",
            element: <IntPassportOcr />,
          },
          {
            path: "chequeOcr",
            element: <ChequeOcr />,
          },
          {
            path: "bankVer",
            element: <BankVer />,
          },
          {
            path: "bankStatement",
            element: <BankStatementAnalysis />,
          },
          {
            path: "uanCheck",
            element: <UanCheck />,
          },
          {
            path: "signature-extraction",
            element: <SignatureExtract />,
          },
          {
            path: "voter-id-verification",
            element: <VoterIdVerification />,
          },
          {
            path: "votercard-ocr",
            element: <VoterOcr />,
          },
          {
            path: "votercard-ocr",
            element: <VoterOcr />,
          },
          {
            path: "dlOcr",
            element: <DlOcr />,
          },
          {
            path: "esicAuth",
            element: <ESICAuth />,
          },
          {
            path: "aadhaarTempering",
            element: <AadhaarTemp />,
          },
        ],
      },
      {
        path: "/ocr_b_dashboard",
        element: <OcrBLandingScreen />,
        children: [
          {
            path: "",
            element: <OcrBDashboard />,
          },
          {
            path: "gstOcr",
            element: <GSTOCR />,
          },
          {
            path: "gstNo",
            element: <GSTNoVerify />,
          },
          {
            path: "fssaiNo",
            element: <FssaiVerification />,
          },
          {
            path: "epfo",
            element: <EPFOVerification />,
          },
          {
            path: "mcaCompany",
            element: <McaCompanyVerification />,
          },
          {
            path: "udhyogAadharOcr",
            element: <UdhyogAadhar />,
          },
        ],
      },
      {
        path: "/face_studio",
        element: <Facestudiodashboard />,
      },
      {
        path: "/face_studio/face_api",
        element: <Detectface />,
      },
      {
        path: "/custom-vision",
        element: <Customvisiondashboard />,
      },
      {
        path: "/custom-vision/image-to-text",
        element: <Imagetotextocr />,
      },
      {
        path: "/custom-vision/image-caption",
        element: <Imagecaptions />,
      },
      {
        path: "/custom-vision/image-tags",
        element: <ImageTags />,
      },
      {
        path: "/custom-vision/image-detect",
        element: <Imagedetect />,
      },
      {
        path: "/chat-studio",
        element: <Chatstudio />,
      },
      {
        path: "/chat-studio/chat",
        element: <Chatgptdesc />,
      },
      {
        path: "/our-ocr",
        element: <InvOcr />,
      },
    ],
  },
  {
    element: <Blank />,
    children: [
      { path: "404", element: <PageNotFound /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
