import Brain from "./components/Brain";
import ChatBots from "./components/ChatBots";
import ChooseUs from "./components/ChooseUs";
import Documents from "./components/Documents";
import FAQ from "./components/Faq";
import FileWizard from "./components/FileWizard";
import Footer from "./components/Footer";
import Languages from "./components/Languages";
import Modes from "./components/Modes";
import Navbar from "./components/Navbar";
import Productivity from "./components/Productivity";
import Satisfaction from "./components/Satisfaction";
import SavingTime from "./components/SavingTime";
import Testinomials from "./components/Testinomials";
import UnQuestionable from "./components/UnQuestionable";
import UploadFiles from "./components/UploadFiles";
import Users from "./components/Users";

export default function Home() {
  return (
    <>
      <Navbar />
      <Brain />
      <Users />
      <Documents />
      <Productivity />
      <ChooseUs />
      <ChatBots />
      <Modes />
      <Languages />
      <FileWizard />
      <UploadFiles />
      <UnQuestionable />
      <Testinomials />
      <Satisfaction />
      <SavingTime />
      <FAQ />
      <Footer />
    </>
  );
}
