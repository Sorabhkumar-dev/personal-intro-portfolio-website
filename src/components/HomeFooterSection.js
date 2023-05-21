import React from "react";
import "../css/HomeFooterSection.css";
import PrimaryHeading from "./PrimaryHeading";
import FooterLinkSection from "./FooterLinkSection";

export default function HomeFooterSection(props) {
  const services = [
    "Faster IOT",
    "Faster Fintech",
    "Faster holding",
    "Faster AI/ML",
    "Faster Finacial Service",
  ];
  const foundations = [
    "Faster Education",
    "Faster Food for every one",
    "Faster women empower",
    "Faster academy of skills",
  ];
  const about = [
    "Our Ceo",
    "Management",
    "Mentors",
    "About Company",
    "Our Investors",
    "Out Technology",
  ];
  const other = ["Jobs", "Client", "Financials", "Blogs"];

  const footerLinkObject = [
    { list: services,name:"Services" },
    { list: foundations, name:"Foundations" },
    { list: about,name:"About" },
    { list: other, name:"Others" },
  ];

  const links = footerLinkObject.map((data) => {
    return (
      <FooterLinkSection footerLinkHeading={data.name} services={data.list} />
    );
  });

  const socialLogos = props.logos.map((logo) => {
    return <img src={logo} className="logo" />;
  });
  return (
    <div className="home_footer_container">
      <section className="footer_top_section">
        <PrimaryHeading
          primaryHeading={props.primaryHeading}
          secondoryHeading={props.secondoryHeading}
        />

        <div className="social_container">{socialLogos}</div>
      </section>

      <section className="footer_link_section">{links}</section>
    </div>
  );
}
