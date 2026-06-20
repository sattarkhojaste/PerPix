import { motion } from "motion/react";
import { ProjectCard } from "./ProjectCard";
import { ProjectDetail } from "./ProjectDetail";
import { useInView } from "../hooks/useInView";
import { useState } from "react";

// Import images from the Figma design
import imgNftMarketMock from "../../assets/bd3445894c377e7ccf609fe30c60911cceade343.png";
import imgNftMarketMock1 from "../../assets/cf913ce3ab6976fe0855647f87d30a7a3f7fe974.png";
import imgNftMarketMock2 from "../../assets/c67ca1fe659a1a37e62e98a870b5524137a1dda4.png";
import imgNftMarketMock3 from "../../assets/41566e6bcd66a2ea2e08a6a231c7c69a8ec2d11f.png";
import imgNftMarketMock4 from "../../assets/45733a329d6bf1e73ff64cc9837a40294f3906b6.png";
import imgNftMarketMock5 from "../../assets/795a2c54295face58154db8e7e124efe7900b272.png";
import imgNftMarketHighFidelity from "../../assets/804bcfb378d8113b085c3a6bcd72d85f10bf2059.png";
import imgNftMarketCollections from "../../assets/86db328d9507c7a68723a97a435bf57effb4155a.png";
import imgNftMarketSignIn from "../../assets/4f2f110d0512e5ceca0288bb7339113cc5ceb868.png";
// import imgNftMarketHero from "../../assets/d6d46ddbb23a4bd0d3e02833a2f8e9c1aa1e1bc9.png";

// SarrafEx images - New curated gallery
import imgSarrafExVoucherMock from "../../assets/c0a5f947791b19117ec555695e34eba8ac083214.png";
import imgSarrafExFeaturesMap from "../../assets/c5265cdc28a1f34ddfe192a7c29481f83bf663df.png";
import imgSarrafExCompetitorAnalysis from "../../assets/29bda90901396c77f9b54fa0e7b296417ca2ddcf.png";
import imgSarrafExLoginFlow from "../../assets/ea7579778f2d5d44ce7c43bcb5523770fe355755.png";
import imgSarrafExMobileScreens from "../../assets/4998df5f27673396d5841aac0bedec025d56f815.png";
import imgSarrafExHighFidelity1 from "../../assets/c906b4d3f41d7265d1e8a5c87ecaa1df4d799b3a.png";
import imgSarrafExHighFidelity2 from "../../assets/8b2361ab3d4b98c9b36f315a7116d52adefc5f77.png";
import imgSarrafExFeesProfile from "../../assets/7274bfdd367832c54891349df2ade607c9e0093c.png";
import imgSarrafExDesignSystem from "../../assets/78f55bbeecaaabfce0a4b84694537ad9ebc02776.png";
import imgSarrafExAssets from "../../assets/e142d8a29456cc33bcb1a49b34a8e0784e9ae7ad.png";

// Keep login desktop dark for project card thumbnail
import imgLoginDesktopDark from "../../assets/5bb0b409b3782e2c90ff13b5b3d3113c5bb1d4d6.png";

// Wellbeing images
import imgWellbeingMobileScreens from "../../assets/89f28023e3fd1828c5b4c36a40b870dfc9d7068f.png";
import imgWellbeingCompetitorAnalysis from "../../assets/daf5fa24f676a3311bafc53226c2cfa8236d7835.png";
import imgWellbeingBrainstorming from "../../assets/82bbdaf5062b7a6f3f3cb01b47b4e7c9b5f23d0f.png";
import imgWellbeingDocumentation from "../../assets/1a7231d4d21951434163e68e2860fd7b44a9fefd.png";
import imgWellbeingSketches from "../../assets/e5d6f5d1dd782e3d7779a68bdd1666d8571f22d2.png";
import imgWellbeingWireframe from "../../assets/817e3abe4774346a8f6e8afd4eff7dbb0fc7569b.png";
import imgWellbeingMessengerWireframe from "../../assets/268a38b3a7f8c6c683ace36ba014dbf3fec4c788.png";
import imgWellbeingClinicWireframe from "../../assets/16e0eb3eeace677f6dea8311b70c6222210b1ee3.png";
import imgWellbeingFinalDesign from "../../assets/7c3fb18a92b9f31316b43fd215e467ce88f0ce65.png";
import imgWellbeingScreens1 from "../../assets/57331dd0971f49b19f2e3810346dbf9f9614fa25.png";
import imgWellbeingScreens2 from "../../assets/9180cb9937d3b1f3ca34a1d441804eecd1ea7f08.png";
import imgWellbeingScreens3 from "../../assets/c0194f5dde27f9d7e1e109e81591114b96f60a34.png";
import imgWellbeingDesktop from "../../assets/0eac4ebcd5b648dc23d3c68749d29c22b3ece557.png";
import imgWellbeingTypography from "../../assets/be4653d0a22ce709d068c923f25152595bf209fc.png";
import imgWellbeingComponents from "../../assets/ddbce40f994b17b3536573825af3301d78f0bcc6.png";

import imgMobileScreenMultiPages from "../../assets/984093f1e28bf38a2d51dbd55f8b08a6fb105919.png";
import imgMobileScreenMultiPages1 from "../../assets/21bc66aebd80c46fae3ae8092607ebe911159470.png";
import imgMobileScreenMultiPages3 from "../../assets/fa4f31d7237990234e995dfd4baa710ec46c9892.png";
import imgDesktopScreenLight1 from "../../assets/050c3984eda8aa388559398a9a98358d4dd10a52.png";
import imgDesktopScreen1 from "../../assets/fcf8aab066a5685625f1f2631cd2bccc703250b8.png";

import imgEducateMock21 from "../../assets/9ab3342019b62c8ba9eba754ab4b5cfd511d2ea8.png";
import imgEducateMock22 from "../../assets/fdd441df1f3a93415baff8c3556d8ac704b88115.png";
import imgHomePageActiveUser1 from "../../assets/5c8b28a947bc4586b69527cab72b648658f624a3.png";
import imgOneCategory1 from "../../assets/817fa38cac4e2863b67f2b25aadb36ae49251815.png";
import imgSinglePageOverview1 from "../../assets/bf5df5f1b350a440ef3ae565f34b6c4aa0adea2f.png";
import imgMasterQuizTest121 from "../../assets/2e37666f473aacec1db61713b7d43ae5c7385ac5.png";

// Educaite Platform new images
import imgEducaiteHome from "../../assets/4a9d701e58d19f7612dfceed9f00c785ca6028d8.png";
import imgEducaiteWireframes from "../../assets/5608df216a8d94cdb53c1ff7a6825f230daa6cb9.png";
import imgEducaiteQuizFlow from "../../assets/8b2d13804f08b5c55d62bdd8ff59b92f4fb9fee3.png";
import imgEducaiteSignupLight from "../../assets/0189bba67b7b0dc18e58e5a33787e35401342e86.png";
import imgEducaiteSignupDark from "../../assets/8b94370971ce251f9f7b8e9cb8efd23fa99e7679.png";
import imgEducaiteScreens from "../../assets/b4290125b075cc0ba08fd1a56ffe27439808fa07.png";
import imgEducaiteComponents1 from "../../assets/9513d38f3719ac1aa5a54e66a7f7a8593432c298.png";
import imgEducaiteComponents2 from "../../assets/ae79eb8956ea684ad9a215520e6bfcdfe9e4d299.png";

// Empress Beauty images
import imgEmpressBeautyHero from "../../assets/b96485e037bdff08bb6038f7cd46908f59dbd5d2.png";
import imgEmpressBeautyProducts from "../../assets/03da6bac1f964a711a4da8993d3f35508387489a.png";
import imgEmpressBeautyShop from "../../assets/460b013fcba619d471b6f17c5a3b319cc1272afa.png";
import imgEmpressBeautyContact from "../../assets/e5c086b3be345635be4f3e1f326dd4d1ed1f284c.png";

// Monta images
import imgMontaHero from "../../assets/MontaBanner.png";
import imgMonta1 from "../../assets/Monta-3.png";
import imgMonta2 from "../../assets/Monta-4.png";
import imgMonta3 from "../../assets/Monta-5.png";
import imgMonta4 from "../../assets/Monta-6.png";

import imgDoctorClinic from "../../assets/d6206e251717310cbba8e28db35153276e6c7a64.png";
import imgDoctorInfo from "../../assets/5547811981a2077cfe90630f6486145376ff1337.png";
import imgMessengerWireframeLf2 from "../../assets/2d64747a05dc842a6209ab27fb67ad87b63d1f18.png";
import imgClinicPanelWireframeLfV31 from "../../assets/08a86076563d788774d542a7b46aabd1e63844f9.png";

import imgSabadPardazMock1 from "../../assets/fd48df3a16fdeed8a3680e21ddbeac49e733b010.png";
import imgSabadPardazMock2 from "../../assets/89a86a0b4ba10feb32ffaa604eb00937bc787e8c.png";
import imgSabadPardazMock3 from "../../assets/46f02d66b48dcaccd29f2fdcd6d415bf8234c638.png";
import imgSabadPardazMock4 from "../../assets/009fd1b9e4b05e98c3e359ddadbb3861892a698f.png";
import imgSabadPardazMock5 from "../../assets/ddd9d7f9a6c9fc431d5249b6f965ab03b94dc722.png";
import imgSabadPardazMock6 from "../../assets/2f30f90e927706de7638207e03116dac677d7e8e.png";

// MightyEx images
import imgMightyExMobile1 from "../../assets/998f318205c739d61396de9933e5a361dab2d893.png";
import imgMightyExCompetitor from "../../assets/a77ce41279b9624c2213927c8088373598906109.png";
import imgMightyExResearch1 from "../../assets/1819c9e6d375330f241f0fd9dac376cc97f64b82.png";
import imgMightyExResearch2 from "../../assets/fae0eeffc26aa6aa6aa9f313d4d9bb50e4d4d63b.png";
import imgMightyExMobileDark from "../../assets/240f511f3712a66c64c2b293c0ebf5889df9f658.png";
import imgMightyExMobileLight from "../../assets/128f523fb4b1e23bc056bade2d8060abb0f4a7d6.png";
import imgMightyExMobileTrading from "../../assets/7b747197452d3fa802cc9adf51154a53264c1c49.png";
import imgMightyExTypography from "../../assets/6b53f4d3031f95789cc6fdb9fdc52ef629a584b9.png";
import imgMightyExComponents from "../../assets/d642f8b06977fc8c7cbafd19b6897c6f1182df29.png";
import imgMightyExButtons from "../../assets/f02df72ff3c8cc5a0a92d5c13e6c03cb785b83f3.png";

// AE (Arman Eghtesad) images
import imgAELogin from "../../assets/89a86a0b4ba10feb32ffaa604eb00937bc787e8c.png";
import imgAEPlatform1 from "../../assets/567546dada3af78894002927175fe095f732af19.png";
import imgAEPlatform2 from "../../assets/b65dc066be00bbcf3ffa13112dbeec70671a07c1.png";
import imgAEPlatform3 from "../../assets/10d0aa6c6310d0910ae42ceb0b871d4d1de8acc7.png";
import imgAEPlatform4 from "../../assets/c7ee657845d06dea9e6d4a1563a70da2c00edb32.png";
import imgAEPlatform5 from "../../assets/4ea55243b2b2246e672a54ccf1c471eace51f3b2.png";
import imgAEMobileScreens from "../../assets/31ebab141bebb54e3f37a63c460f658dbb101de8.png";
import imgAEDesktopHighFidelity from "../../assets/fd2bba045f701a60e911d13fee90441f47c978a4.png";
import imgAEMultiDevice from "../../assets/f29fac272c36c0a361532cb947bfef9957d2d6d7.png";
import imgAEInvestmentDashboard from "../../assets/76c67ca547159ea80e304158360e5a6a62e140ca.png";

// DPS Project images
import imgDPSMobileFlow from "../../assets/eb0870bbcf6e11a56ac6c5d3937ccafdaa962183.png";
import imgDPSSiteMap from "../../assets/69dca8a0184ee319ab2a12569f345f781b42cbd1.png";
import imgDPSSketches from "../../assets/dae3b0e79f4993389cf272a39456e853e7ed2dd7.png";
import imgDPSReportScreens from "../../assets/130ef84c8c922f35b1c6173856d2852354c67906.png";
import imgDPSProfileScreens from "../../assets/25bc7c676d9890bbf4bb9c569eac94b28ccfcf45.png";
import imgDPSLoginFlow from "../../assets/c78d05b07d99558047c3cc0c990cded85397aee1.png";
import imgDPSComponents from "../../assets/c111063a1ef6c1a0b2f54ec952208bf178787f63.png";

const projects = [
  // 1. SarrafEx (ProEx)
  {
    id: "sarrafex",
    title: "SarrafEx (ProEx)",
    category: "Crypto Exchange Web",
    description:
      "We are a peer-to-peer digital currency exchange start-up offering seamless trading, innovative tools, and premium support for both new and experienced traders.",
    image: imgSarrafExVoucherMock,
    tags: ["Figma", "PS", "Ai", "Ae", "Clarity", "Firebase", "FigJam", "Miro"],
    fullDescription:
      "We are a start-up exchange that operates in the peer-to-peer market of digital currencies. Our main purpose is to provide solutions for users in the ever-growing financial markets. With our team's extensive experience in the financial sector and strong connections to technology, we are driven to create innovative solutions using creativity and quality as our main indicators of success. As money changers, we are committed to providing exceptional service to our clients, ensuring a seamless experience while trading digital currencies. Our goal is to revolutionize the financial market by offering cutting-edge technology and premium customer support, making us the go-to platform for both novice and seasoned traders alike.",
    role: "Product Design Lead",
    duration: "Sep 2022 - Jul 2023",
    team: "3 Designers, 4 Front-end (React), 4 Back-end Engineers",
    tools: [
      "Figma",
      "Photoshop",
      "Illustrator",
      "After Effects",
      "Clarity",
      "Firebase",
      "FigJam",
      "Miro",
      "Balsamiq",
      "Lottie",
    ],
    challenge:
      "One of my biggest challenges was fixing the flawed process that the design and programming team had adopted. As a newcomer with a more receptive outlook than my predecessors, I took it upon myself to resolve these issues. My goal was to find a solution that would be acceptable and logical to the other team members. During many meetings, I mentioned similar and successful examples (Best Practice) and together we reached my goal. Finally, the design and programming team accepted the new design structure and design flow changes.",
    solution:
      "Initially, I rectified the design paths and addressed issues related to communication between the designers and programmers. Additionally, I was responsible for overseeing the process of scrutinizing and delivering tasks from the programmer (Design Review). As there was no existing design system and unified structure, my aim was to establish a cohesive structure, gather assets, and revamp the prepared pages. Furthermore, I designed the remaining pages in two themes (dark and light) and two different layouts (RTL & LTR). Lastly, I ensured that all designs were usable and responsive across three different screen sizes.",
    outcomes: [
      "Successfully established a cohesive design system and collaborative workflow embraced by cross-functional teams",
      "Created comprehensive design documentation that significantly strengthened designer-developer collaboration",
      "Delivered fully responsive designs supporting multiple screen sizes, theme variations, and bidirectional layouts",
      "Transformed design iteration cycles through streamlined processes and improved team alignment",
    ],
    images: [
      imgSarrafExVoucherMock,
      imgSarrafExFeaturesMap,
      imgSarrafExCompetitorAnalysis,
      imgSarrafExLoginFlow,
      imgSarrafExMobileScreens,
      imgSarrafExHighFidelity1,
      imgSarrafExHighFidelity2,
      imgSarrafExFeesProfile,
      imgSarrafExDesignSystem,
      imgSarrafExAssets,
    ],
  },
  // 2. Wellbeing
  {
    id: "wellbeing",
    title: "Wellbeing",
    category: "Healthcare Platform",
    description:
      "Healthcare platform connecting patients with doctors, featuring appointment scheduling, telemedicine, and health record management.",
    image: imgWellbeingMobileScreens,
    tags: ["Healthcare", "Mobile", "Telemedicine", "iOS", "Android"],
    fullDescription:
      "Wellbeing is a comprehensive healthcare platform that bridges the gap between patients and healthcare providers. The platform offers telemedicine consultations, appointment scheduling, prescription management, and secure health record storage.",
    role: "Product Designer",
    duration: "6 months",
    team: "1 Product Designer, 5 Developer, 1 Medical Advisor, 1 Lawyer",
    tools: ["Figma", "Framer", "UserTesting", "Maze"],
    challenge:
      "Designing a healthcare platform that complies with medical regulations while being accessible to users of all ages and technical abilities. The interface needed to handle sensitive medical information securely while maintaining a warm, approachable feel.",
    solution:
      "I created a mobile-first design with large, clear typography and intuitive navigation. The interface uses calming colors and friendly illustrations to reduce healthcare anxiety. Video consultation features were optimized for various network conditions, and all medical information is presented in patient-friendly language.",
    outcomes: [
      "Successfully bridged the gap between patients and healthcare providers through thoughtful digital experience design",
      "Enhanced appointment accessibility and streamlined patient journey through user-centered design approach",
      "Delivered compassionate telemedicine experience balancing usability with healthcare compliance standards",
      "Designed secure platform architecture respecting patient privacy while maintaining approachable interface aesthetics",
    ],
    images: [
      imgWellbeingMobileScreens,
      imgWellbeingFinalDesign,
      imgWellbeingSketches,
      imgWellbeingWireframe,
      imgWellbeingMessengerWireframe,
      imgWellbeingCompetitorAnalysis,
      imgWellbeingBrainstorming,
      imgWellbeingDocumentation,
      imgWellbeingScreens1,
      imgWellbeingScreens2,
      imgWellbeingScreens3,
      imgWellbeingDesktop,
      imgWellbeingTypography,
      imgWellbeingComponents,
    ],
  },
  // 3. MightyEx
  {
    id: "mightyex",
    title: "MightyEx",
    category: "Crypto Exchange",
    description:
      "Modern cryptocurrency exchange mobile application with advanced trading features, real-time price tracking, and comprehensive portfolio management for Android, iOS, and PWA.",
    image: imgMightyExMobileTrading,
    tags: [
      "Fintech",
      "Trading",
      "Design System",
      "Mobile",
      "Android",
      "iOS",
      "PWA",
    ],
    fullDescription:
      "MightyEx is a comprehensive cryptocurrency exchange mobile application designed to serve both novice and professional traders. The project involved creating an entire design system from scratch for native mobile platforms (Android & iOS) and Progressive Web App (PWA) with real-time trading capabilities.",
    role: "Senior Product Designer",
    duration: "8 months",
    team: "2 Designers, 5 Developers, 1 Product Manager",
    tools: ["Figma", "Principle", "Zeplin", "Sketch"],
    challenge:
      "Creating a mobile trading platform that could compete with established exchanges while serving users across different experience levels. The application needed to display complex financial data clearly on mobile screens, provide real-time updates, and maintain high security standards without sacrificing usability.",
    solution:
      "I developed a comprehensive mobile design system with light and dark modes, created intuitive trading interfaces with customizable charts optimized for touch interactions, and designed a portfolio dashboard that presents complex data in digestible formats. The responsive mobile design ensures seamless experience across Android, iOS, and PWA platforms.",
    outcomes: [
      "Established comprehensive mobile design system from ground up, creating unified visual language and interaction patterns that scale across Android, iOS, and PWA platforms",
      "Designed intuitive information architecture that successfully translates complex financial data into accessible, mobile-optimized interfaces for diverse trader expertise levels",
      "Pioneered innovative approach to real-time trading visualization on mobile devices, balancing data density with clarity through thoughtful hierarchy and progressive disclosure patterns",
      "Led cross-functional collaboration between design, development, and product teams to align technical constraints with user needs and business objectives",
    ],
    images: [
      imgMightyExMobile1,
      imgMightyExCompetitor,
      imgMightyExResearch1,
      imgMightyExResearch2,
      imgMightyExMobileDark,
      imgMightyExMobileLight,
      imgMightyExMobileTrading,
      imgMightyExTypography,
      imgMightyExComponents,
      imgMightyExButtons,
    ],
  },
  // 4. AE (Arman Eghtesad - Asset Management)
  {
    id: "arman-eghtesad",
    title: "AE (Arman Eghtesad)",
    category: "FinTech - Asset Management",
    description:
      "Comprehensive accounting and asset management software for portfolio investors and portfolio managers with complete portfolio, investor, and asset information management.",
    image: imgSabadPardazMock1,
    tags: ["Figma", "XD", "Ai", "PS", "Miro", "Jira", "Hotjar", "Ant Design"],
    fullDescription:
      "It is a comprehensive and complete accounting and asset management software for portfolio investors and portfolio managers. In this system, the complete information of the portfolios, investors and their assets is accurately recorded during the transactions and it is also possible to review and edit it.",
    role: "Lead of Product Design",
    duration: "Jul 2021 - Sep 2022",
    team: "2 UI/UX Designers, 1 UX Researcher, 1 UX Writer, 1 UX Specialist, 4 Frontend Developers (React), 5 Backend Developers, 3 IT Infrastructure and DevOps",
    tools: [
      "Figma",
      "Adobe XD",
      "Illustrator",
      "Photoshop",
      "Miro",
      "Jira",
      "Hotjar",
      "Ant Design System",
    ],
    challenge:
      "For this project, according to several interview sessions with Arman Eghtesad employees and the company's users and shareholders, the design preparation and testing of different users' journeys, the decision has been made on the design based on the service design. One sub-branches of Service Design is that the multidimensional product is created in terms of performance. That is, your users are not only system users but also system employees. And in Arman Eghtesad, we had several user models for which we had to design a multidimensional system. Our main challenge in designing Arman Contract was that its users have their own users. Additionally, the existing system relied heavily on outdated automation processes and required excessive human resources to manage basic operations. This old-school approach resulted in slow workflows, human errors, and inefficient resource allocation. We needed to modernize the entire system to reduce manual workload, minimize human dependency, and accelerate operational progress while maintaining accuracy and compliance.",
    solution:
      "Because of the existing challenge, we had to design a system that considers all the users of a single system first. Then, using the service inheritance method of each level, increase and decrease the parts of other services (Modular Design). And for this reason, we used Ant-Design-System because object-oriented design was one of the design values of Ant-Design-System. In this way, we could design a system that, while having consistency and modularity, could also meet the needs of the service providers (Arman Eghtesad employees and its representatives). In order to create a unified identity, we changed the components of the antenna at the style level so that it matches the company's brand, identity and goals. In some places, we had to leave the style level and combine the components together.",
    outcomes: [
      "Helped streamline and support critical operational processes for a company of over 100 employees",
      "Significantly improved efficiency and reduced manual workload across teams",
      "Successfully implemented modular design system using Ant Design framework",
      "Created multidimensional system serving both system users and employees",
      "Established consistent design language aligned with company brand identity",
    ],
    images: [
      imgAELogin,
      imgAEPlatform1,
      imgAEPlatform2,
      imgAEPlatform3,
      imgAEPlatform4,
      imgAEPlatform5,
      imgAEMobileScreens,
      imgAEDesktopHighFidelity,
      imgAEMultiDevice,
      imgAEInvestmentDashboard,
    ],
  },
  // 5. DPS Project
  {
    id: "dps-project",
    title: "DPS Project",
    category: "FinTech - B2B2C",
    description:
      "Innovative B2B2C solution digitizing the preemptive rights process in the stock market, eliminating traditional in-person procedures for shareholders and issuing companies.",
    image: imgDPSProfileScreens,
    tags: ["Figma", "XD", "Ai", "PS", "Miro", "Jira", "Hotjar", "B2B2C"],
    fullDescription:
      "DPS project is a B2B2C project that deals with a sensitive challenge in the capital market of the stock exchange. On the one hand, this challenge is disruptive for the shareholders of this market, and on the other hand, for the companies that own the shares. The main issue of this challenge is the purchase of the preemptive right of each share in the stock market, which currently has a traditional and difficult process. Shareholders must do it in person, while companies face big challenges with significant costs in terms of human resources and time to manage, receive, and allocate this information to shareholders.",
    role: "Lead of Product Design",
    duration: "Jul 2021 - Sep 2022",
    team: "2 UI/UX Designers, 1 UX Researcher, 1 UX Writer, 1 UX Specialist, 4 Frontend Developers (React), 5 Backend Developers, 3 IT Infrastructure and DevOps",
    tools: [
      "Figma",
      "Adobe XD",
      "Illustrator",
      "Photoshop",
      "Miro",
      "Jira",
      "Hotjar",
    ],
    challenge:
      "The company needed a solution to simplify complex internal processes and boost shareholder value. Additionally, there was a critical gap in sales generation—requiring outreach to peer organizations and compelling product demonstrations to secure approval from the stock exchange regulatory body.",
    solution:
      "Business research: I started by understanding the business requirements. START-Business Interview: I've organized several sessions to meet all the stakeholders and understand what they're trying to achieve and any design assumptions they may have. Quantitative study: I wanted to quantify feedback on the current method. At the end of the interview with the user and the customer, I asked the participants to give me a better view by completing a few questions that include their current problems and the difficulties they have in this path, so that I can provide a solution that meets all the desired issues.",
    outcomes: [
      "Successfully digitized a traditionally manual and in-person preemptive rights process",
      "Created seamless B2B2C experience for both shareholders and issuing companies",
      "Reduced operational workload and processing time through automation and structured data flows",
      "Eliminated the need for in-person shareholder visits by enabling fully online journey",
      "Increased transparency, accuracy, and trust in sensitive financial transactions",
      "Strengthened Arman Eghtesad's position as a digital innovator in the capital market",
      "Created scalable infrastructure aligned with regulatory requirements",
    ],
    images: [
      imgDPSMobileFlow,
      imgDPSSiteMap,
      imgDPSSketches,
      imgDPSReportScreens,
      imgDPSProfileScreens,
      imgDPSLoginFlow,
      imgDPSComponents,
    ],
  },
  // 6. NFT Marketplace
  {
    id: "nft-marketplace",
    title: "NFT Marketplace",
    category: "Web Application",
    description:
      "A comprehensive NFT marketplace where users can discover, sell and buy their favorite digital collectibles. Features trending NFTs and advanced search across categories.",
    image: imgNftMarketMock,
    tags: ["UI/UX", "Web3", "Blockchain", "React", "Figma"],
    fullDescription:
      "The NFT Marketplace project aimed to create a user-friendly platform for buying, selling, and discovering non-fungible tokens. The platform needed to handle complex blockchain interactions while maintaining an intuitive interface for users of all experience levels.",
    role: "Lead Product Designer",
    duration: "4 months",
    team: "1 Designer, 3 Developers, 1 PM",
    tools: ["Figma", "Adobe Illustrator", "Miro", "Protopie"],
    challenge:
      "The main challenge was to simplify the complex world of NFTs and blockchain technology for mainstream users. We needed to create an interface that would appeal to both crypto-native users and newcomers, while maintaining security and trust throughout the buying and selling process.",
    solution:
      "I designed a clean, modern interface with clear visual hierarchy and intuitive navigation. The design featured prominent trending collections, easy-to-understand category filters, and a streamlined bidding process. We implemented visual feedback for all blockchain transactions and created comprehensive onboarding flows for new users.",
    outcomes: [
      "Successfully simplified complex blockchain technology through intuitive interface design and clear information hierarchy",
      "Enhanced user confidence in digital asset transactions through thoughtful onboarding and visual feedback systems",
      "Created welcoming experience for mainstream users while preserving depth for crypto-native collectors",
      "Established design patterns balancing trust, security, and accessibility in Web3 marketplace context",
    ],
    images: [
      imgNftMarketHighFidelity,
      imgNftMarketCollections,
      imgNftMarketSignIn,
      // imgNftMarketHero,
    ],
  },
  // 7. Educate Platform
  {
    id: "educate",
    title: "Educate Platform",
    category: "E-Learning",
    description:
      "Interactive learning platform with course management, quizzes, progress tracking, and comprehensive reporting for students and educators.",
    image: imgEducateMock21,
    tags: ["Education", "LMS", "Interactive", "Gamification", "Analytics"],
    fullDescription:
      "Educate is a modern learning management system designed to make online education engaging and effective. The platform provides tools for course creation, interactive assessments, progress tracking, and detailed analytics for both students and instructors.",
    role: "Lead UX/UI Designer",
    duration: "5 months",
    team: "1 Designer, 4 Developers, 2 Educational Consultants",
    tools: ["Figma", "Adobe XD", "InVision", "Optimal Workshop"],
    challenge:
      "Creating an engaging learning experience that keeps students motivated while providing educators with powerful tools for course management and assessment. The platform needed to work seamlessly for various age groups and accommodate different learning styles.",
    solution:
      "I designed an intuitive course navigation system with progress indicators and achievement badges for gamification. The quiz system includes multiple question types with instant feedback. The dashboard provides clear analytics for both students and teachers, helping identify areas for improvement.",
    outcomes: [
      "Successfully expanded institutional reach through scalable learning platform adopted by educational organizations",
      "Designed engaging learning experience that meaningfully improved course completion and student retention rates",
      "Enhanced learning outcomes through thoughtful gamification and personalized feedback mechanisms",
      "Streamlined educator workflows enabling more focus on teaching quality and student engagement",
    ],
    images: [
      imgEducaiteHome,
      imgEducaiteWireframes,
      imgEducaiteQuizFlow,
      imgEducaiteSignupLight,
      imgEducaiteSignupDark,
      imgEducaiteScreens,
      imgEducaiteComponents1,
      imgEducaiteComponents2,
    ],
  },
  // 8. Empress Beauty
  {
    id: "empress-beauty",
    title: "Empress Beauty",
    category: "Beauty & E-Commerce",
    description:
      "E-commerce platform for premier beauty clinic in Vienna, offering online product sales and showcasing world-class beauty, rejuvenation, and wellness services.",
    image: imgEmpressBeautyHero,
    tags: ["E-Commerce", "B2C", "Beauty", "XD", "Figma"],
    fullDescription:
      "A group of Empress beauty clinics with brilliant experience and specialized branches, is one of the best equipped clinics in the field of beauty, rejuvenation, weight loss and laser treatment in Vienna. The services offered up to world standards, and we try every day to create the best experience for our companions. The medical staff and staff that work at Empress Beauty clinics are among the best in their field. The group uses the most advanced equipment in the world and holds all relevant licenses in the field of rejuvenation services, cosmetic surgery, slimming, laser, hair transplantation and slimming diet.",
    role: "Product Designer",
    duration: "Aug 2021 - Oct 2021",
    team: "1 Product Designer, 4 Tech Team on site",
    tools: ["Adobe XD", "Figma"],
    challenge:
      "The clinic needed to expand their business beyond in-person services and establish a digital presence to sell their premium beauty products directly to consumers. The main challenge was creating an e-commerce experience that reflected the clinic's world-class reputation and made customers feel confident purchasing high-end beauty products online.",
    solution:
      "I designed an elegant, trustworthy e-commerce platform that showcases the clinic's expertise and product quality. The design emphasizes product details, ingredient transparency, and before/after results to build consumer confidence. The interface features a clean, luxurious aesthetic matching the clinic's premium positioning, with intuitive product categorization and a streamlined checkout process.",
    outcomes: [
      "Delivered clean and professional user interface that effectively showcases premium beauty products",
      "Created intuitive shopping experience enabling customers to browse and purchase products effortlessly",
      "Designed fast and streamlined checkout process reducing friction in the purchasing journey",
      "Established user-friendly navigation and product categorization for easy product discovery",
    ],
    images: [
      imgEmpressBeautyHero,
      imgEmpressBeautyProducts,
      imgEmpressBeautyShop,
      imgEmpressBeautyContact,
    ],
  },
  // 8. Monta
  {
    id: "Monta",
    title: "Monta",
    category: "Modern Online Teaching Assistant",
    description:
      "Monta is an advanced digital learning platform in Iran that reimagines how education is delivered and managed, bridging institutions and learners through a unified ecosystem. By combining powerful B2B tools with a student-focused experience, it simplifies complex educational processes into seamless, efficient, and user-friendly journeys.",
    image: imgMontaHero,
    tags: [
      "Figma",
      "Figjam",
      "React",
      "Smartlook",
      "Miro",
      "Balsamiq",
      "Lottie",
    ],
    fullDescription:
      "Monta is the pioneering, knowledge-based leader in Iran’s E-learning sector, engineered to streamline and elevate the educational ecosystem. The platform serves as a dual-faceted network: a robust B2B infrastructure for educational institutions, schools, advisors, and teachers to manage performance and curriculum, coupled with an engaging B2C digital suite for students seeking optimized learning paths. Tailored for both desktop and mobile environments, Monta transforms complex educational data, assessment metrics, and heavy workflows into highly intuitive, calm, and productive user journeys, ensuring academic goals are reached with minimal cognitive friction.",
    role: "Product Designer Lead",
    duration: "Sep 2023 - Jul 2024",
    team: "2 Designers, 5 Front-end (React), 5 Back-end Engineers",
    tools: ["Figma", "Figjam", "React", "PS", "Ai", "Smartlook", "Miro"],
    challenge:
      "Multi-Persona Complexity: Translating highly divergent requirements from two distinct target audiences—managing complex operational panels for non-technical institutional users (B2B) while simultaneously retaining a focus on psychological reassurance and engagement for students (B2C). Data-Heavy Dashboards: Overcoming the high cognitive load inherent in educational metrics, online testing data, and large-scale question banks on desktop, requiring structural architecture rather than superficial decoration. Responsive Parity: Ensuring complex administrative tools and interactive question builders seamlessly adapted from heavy desktop layouts into fluid, legible, and anxiety-reducing mobile interfaces.",
    solution:
      "System Scaling & Efficiency: Unifying the platform's fragmented UI architecture under a single scalable design system to reduce time-to-market for future B2B features and minimize front-end technical debt. Retention & Productivity Uplift: Increasing daily active engagement (DAU) and user satisfaction across the ecosystem by redesigning cluttered educational flows into simplified, clear decision-making pathways. Trust & Anxiety Reduction: Building an emotionally calm and supportive testing environment that reduces user anxiety during high-stakes online examinations.",
    outcomes: [
      "Unified fragmented product experiences under a scalable design system, significantly reducing design inconsistencies and accelerating feature delivery across B2B and B2C platforms",
      "Transformed complex, data-heavy educational workflows into structured and intuitive user journeys, improving decision clarity and reducing cognitive load for both students and institutional users",
      "ncreased user engagement and platform usability by redesigning critical learning and assessment flows, contributing to higher retention and more consistent daily usage",
      "Elevated cross-functional efficiency by introducing structured design processes and collaborative workflows, enabling faster iteration cycles and stronger alignment between product, design, and engineering",
    ],
    images: [imgMonta1, imgMonta2, imgMonta3, imgMonta4],
  },
];

export function Projects({
  onViewChange,
}: {
  onViewChange: (isDetailView: boolean) => void;
}) {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  const handleProjectClick = (projectId: string) => {
    const project = projects.find((p) => p.id === projectId);
    if (project) {
      setSelectedProject(project);
      onViewChange(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
    onViewChange(false);
    // Scroll to projects section
    setTimeout(() => {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  if (selectedProject) {
    return (
      <ProjectDetail project={selectedProject} onBack={handleBackToProjects} />
    );
  }

  return (
    <section id="projects" className="py-32 bg-slate-950" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A selection of my recent work across web, mobile, and product design
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              category={project.category}
              description={project.description}
              image={project.image}
              tags={project.tags}
              index={index}
              onClick={() => handleProjectClick(project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
