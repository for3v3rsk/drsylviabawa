import "./App.css";
import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Quotation from "./components/quotation/Quotation";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Publications from "./components/publications/Publications";
import Contacts from "./components/contact/Contacts";
import MobileNav from "./components/navbar/MobileNav";

//* published book chapter image
import bookChapter_WHR from "./assets/imgs/international_human_rights_of_women.png";

//* published articles images
import article_Assessing_Universalism from "./assets/imgs/Assessing_Universalism.png";
import article_Agency_Social_Status from "./assets/imgs/Agency_Social_Status_and_Performing.png";
import article_Feminists from "./assets/imgs/Feminists_make_too_much_noise.png";
import article_Paradoxes from "./assets/imgs/Paradoxes_of_(dis)empowerment.png";
import article_People from "./assets/imgs/People_come.png";
import article_African_women from "./assets/imgs/African_women_identity.png";

function App() {
  //* toggle visibility (state) of Mobile Menu/Nav
  const [showMenu, setShowMenu] = useState(false);

  //*dismiss mobile menu
  const disMissMenu = () => setShowMenu(false);

  //*  mobile nav click handler
  const menuIsOpen = () => {
    setShowMenu(!showMenu);
  };

  // Degrees acquired
  // eslint-disable-next-line
  const degreesAcquired = [
    "PhD, Queen's University",
    "MA Brock University",
    "BA(Honours), University of Ghana",
  ];

  // Research Interest areas
  // eslint-disable-next-line
  const researchInterests = [
    "Sociology",
    "Globalization",
    "International Political Economy",
    "Postcoloniality and discourses of women's rights and empowerment",
    "Human Rights",
    "Gender and Development",
    "Postcolonial and Transnational feminisms",
    "Gender and Development",
    "Human Rights",
    "Women's Rights",
    "Sociology",
  ];

  // Publications
  //* Published Books/Book Chapter
  const publishedBooks = [
    {
      id: 1,
      imgURL: bookChapter_WHR,
      altText: "Women and the Human Rights Paradigm in the African Context",
      category: "Book Chapter",
      title: "Women and the Human Rights Paradigm in the African Context",
      bookURL:
        "https://link.springer.com/referenceworkentry/10.1007/978-981-10-4550-9_8-1",
      yearOfPublication: 2019,
    },
  ];

  //* Published Articles
  const publishedArticles = [
    {
      id: 1,
      imgURL: article_People,
      altText:
        "“People come and go but we don't see anything”: How Might Social Research Contribute to Social Change?",
      category: "Article",
      title:
        "“People come and go but we don't see anything”: How Might Social Research Contribute to Social Change?",
      articleURL:
        "https://search.proquest.com/openview/3ace779328b9d334890f440d1b87acde/1?pq-origsite=gscholar&cbl=55152",
      yearOfPublication: 2019,
    },
    {
      id: 2,
      imgURL: article_Agency_Social_Status,
      altText:
        "Agency, Social Status and Performing Marriage in Postcolonial Societies",
      category: "Article",
      title:
        "Agency, Social Status and Performing Marriage in Postcolonial Societies",
      articleURL: "https://doi.org/10.1177/0021909619851148",
      yearOfPublication: 2019,
    },
    {
      id: 3,
      imgURL: article_African_women,
      altText:
        "(Un)African women: identity, class and moral geographies in postcolonial times",
      category: "Article",
      title:
        "(Un)African women: identity, class and moral geographies in postcolonial times",
      articleURL: "https://doi.org/10.1080/14725843.2018.1474340",
      yearOfPublication: 2018,
    },
    {
      id: 4,
      imgURL: article_Feminists,
      altText:
        "“Feminists make too much noise!”: generational differences and ambivalence in feminist development politics in Ghana",
      category: "Article",
      title:
        "“Feminists make too much noise!”: generational differences and ambivalence in feminist development politics in Ghana",
      articleURL: "https://doi.org/10.1080/00083968.2018.1462720",
      yearOfPublication: 2018,
    },
    {
      id: 5,
      imgURL: article_Assessing_Universalism,
      altText:
        "Assessing Universalism and the Rhetoric of Development Assistance in Human Rights Research: Canadian-Ghanaian Human Rights Engagements",
      category: "Article",
      title:
        "Assessing Universalism and the Rhetoric of Development Assistance in Human Rights Research: Canadian-Ghanaian Human Rights Engagements",
      articleURL:
        "https://heinonline.org/HOL/LandingPage?handle=hein.journals/tranhurrv4&div=4&id=&page=",
      yearOfPublication: 2017,
    },
    {
      id: 6,
      imgURL: article_Paradoxes,
      altText:
        "Paradoxes of (dis)empowerment in the postcolony: women, culture and social capital in Ghana",
      category: "Article",
      title:
        "Paradoxes of (dis)empowerment in the postcolony: women, culture and social capital in Ghana",
      articleURL: "https://doi.org/10.1080/01436597.2015.1086636",
      yearOfPublication: 2016,
    },
  ];

  //* Google Maps Location details
  // eslint-disable-next-line
  const location = {
    address: "4700 Keele St, Toronto, ON M3J 1P3, Canada",
    lat: 43.77353716351162,
    lng: -79.50186611812136,
  };

  return (
    <>
      <MobileNav showMenu={showMenu} disMissMenu={disMissMenu} />
      <Navbar menuIsOpen={menuIsOpen} />
      <Hero />
      <Quotation />
      <About />
      <Publications books={publishedBooks} articles={publishedArticles} />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
