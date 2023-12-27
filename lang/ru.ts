import axios from "~/api/axios-drf";

async function getContent() {
  axios.defaults.xsrfCookieName = "csrftoken";
  axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
  const response = await axios.get("landing-page/ru");
  console.log("loaded! ru")
  return response.data;
}

let content= await getContent();

export default {
  Introduction: content.Introduction,
  Howitworks: content.Howitworks,
  ReportSubmission: content.ReportSubmission,
  Blog: content.Blog,
  Adminstration: content.Adminstration,
  Registration: content.Registration,
  homeTitle1: content.homeTitle1,
  homeTitle2: content.homeTitle2,
  home1: content.home1,
  home2: content.home2,
  home3: content.home3,
  home4: content.home4,
  aboutTitle: content.aboutTitle,
  aboutHelpTitle1: content.aboutHelpTitle1,
  aboutHelpTitle2: content.aboutHelpTitle2,
  aboutHelpItem1: content.aboutHelpItem1,
  aboutHelpItem2: content.aboutHelpItem2,
  aboutHelpItem3: content.aboutHelpItem3,
  aboutHelpItem4: content.aboutHelpItem4,
  aboutHelpItem5: content.aboutHelpItem5,
  aboutOfferTitle: content.aboutOfferTitle,
  aboutOfferItem1: content.aboutOfferItem1,
  aboutOfferItem2: content.aboutOfferItem2,
  aboutOfferItem3: content.aboutOfferItem3,
  howTitle: content.howTitle,
  howSubTitle: content.howSubTitle,
  howContent: content.howContent,
  benifitsTitle: content.benefitsTitle,
  benifitsItem1: content.benefitsItem1,
  benifitsItem2: content.benefitsItem2,
  benifitsItem3: content.benefitsItem3,
  prasing: content.pricing,
  
  prasing1Title: content.pricing1Title,
  pricing1Name: content.pricing1Name,
  pricing1Description: content.pricing1Description,
  pricing1Header: content.pricing1Header,
  pricing1Price: content.pricing1Price,
  pricing1Item1: content.pricing1Item1,
  pricing1Item2: content.pricing1Item2,
  pricing1Item3: content.pricing1Item3,
  pricing1Item4: content.pricing1Item4,
  pricing1Item5: content.pricing1Item5,

  prasing2Title: content.pricing2Title,
  pricing2Name: content.pricing2Name,
  pricing2Description: content.pricing2Description,
  pricing2Header: content.pricing2Header,
  pricing2Price: content.pricing2Price,
  pricing2Item1: content.pricing2Item1,
  pricing2Item2: content.pricing2Item2,
  pricing2Item3: content.pricing2Item3,
  pricing2Item4: content.pricing2Item4,
  pricing2Item5: content.pricing2Item5,

  prasing3Title: content.pricing3Title,
  pricing3Name: content.pricing3Name,
  pricing3Description: content.pricing3Description,
  pricing3Header: content.pricing3Header,
  pricing3Price: content.pricing3Price,
  pricing3Item1: content.pricing3Item1,
  pricing3Item2: content.pricing3Item2,
  pricing3Item3: content.pricing3Item3,
  pricing3Item4: content.pricing3Item4,
  pricing3Item5: content.pricing3Item5,

  ourBlog:"Блог",
  getStart: content.getStart,
  faqTitle: content.faqTitle,
  faqSubTitle: content.faqSubTitle,
  story: content.story,
  pricing: content.pricing,

};