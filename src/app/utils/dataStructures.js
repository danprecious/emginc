// QUICK NOTE: for the services, I want to create a different page for each services that would talk about the service in details.
//  In the services pages, these would just be highlight... and then they can see more


import {
  FaBox,
  FaBullhorn,
  FaChartBar,
  FaChartLine,
  FaClipboardList,
  FaCogs,
  FaFacebookF,
  FaHandshake,
  FaLightbulb,
  FaMailBulk,
  FaRocket,
  FaSearch,
  FaShieldAlt,
  FaStar,
  FaSuitcase,
  FaTrophy,
  FaUsers,
} from "react-icons/fa";

export const links = [
  {
    id: 1,
    name: "Services",
    href: "/services",
    subLinks: [
      {
        id: 1.1,
        name: "Total marketing package",
        href: "/services/total-marketing",
      },
      {
        id: 1.2,
        name: "SEO marketing",
        href: "/services/seo-marketing",
      },
      {
        id: 1.3,
        name: "Email marketing",
        href: "/services/email-marketing",
      },
      {
        id: 1.4,
        name: "Marketing consulting",
        href: "/services/consulting",
      },
      {
        id: 1.5,
        name: "Social media marketing",
        href: "/services/social-media-marketing",
      },
    ],
    icon: "",
  },
  {
    id: 2,
    name: "About",
    href: "/aboutUs",
    subLinks: [
      {
        id: 2.1,
        name: "About us",
        href: "/aboutUs",
      },
      {
        id: 2.2,
        name: "Leave a review",
        href: "/aboutUs",
      },
      {
        id: 2.3,
        name: "Career",
        href: "/aboutUs",
      },
    ],
    icon: "",
  },
  {
    id: 3,
    href: "/works/case-studies",
    name: "Works",
    subLinks: [
      {
        id: 3.1,
        name: "Portfolio",
        href: "/works/portfolio",
      },
      {
        id: 3.2,
        name: "Case studies",
        href: "/works/case-studies",
      },
    ],
    icon: "",
  },
];

export const services = [
  {
    id: 1,
    service: "Total Marketing",
    description:
      "Our Total Marketing service offers a comprehensive approach to building your brand and reaching your target audience. We cover every aspect of marketing, from strategy development to execution, ensuring a cohesive and impactful presence across all channels.",
    icon: <FaBullhorn />,
    href: "/services/total-marketing",
    details:
      "With our Total Marketing service, we provide an all-encompassing solution that integrates various marketing strategies and tools. We focus on creating a unified brand message, optimizing your marketing efforts, and delivering measurable results. Our team works closely with you to develop a personalized plan that aligns with your business objectives and maximizes your market potential. From digital advertising to content creation, we handle it all to ensure your brand stands out in a competitive landscape.",
    details2:
      "Our approach involves a detailed assessment of your current marketing efforts, identifying opportunities for improvement, and implementing a robust strategy tailored to your needs. We leverage data-driven insights to refine our tactics and ensure optimal performance. Our goal is to help you achieve long-term success by driving growth, enhancing brand visibility, and engaging your audience effectively. Trust us to be your partner in navigating the complexities of marketing and achieving your business goals.",
    coverImage: "",
  },
  {
    id: 2,
    service: "Marketing Consulting",
    description:
      "Our Marketing Consulting service provides expert guidance and strategic insights to help you navigate the marketing landscape. We offer tailored advice and solutions to enhance your marketing strategies and achieve your business objectives.",
    icon: <FaLightbulb />,
    href: "/services/consulting",
    details:
      "Our consulting service is designed to offer you expert advice on various aspects of marketing. We analyze your current strategies, identify areas for improvement, and provide actionable recommendations to optimize your marketing efforts. Whether you need help with brand positioning, campaign planning, or market research, our team is here to support you. We bring a wealth of experience and industry knowledge to ensure that your marketing strategies are effective and aligned with your goals.",
    details2:
      "We work closely with you to understand your unique challenges and opportunities. Our consultants provide valuable insights into market trends, customer behavior, and competitive analysis. We collaborate with you to develop a strategic plan that addresses your specific needs and drives meaningful results. Our goal is to empower you with the knowledge and tools needed to make informed decisions and achieve sustainable growth in your marketing initiatives.",
    coverImage: "",
  },
  {
    id: 3,
    service: "SEO Marketing",
    description:
      "Our SEO Marketing service focuses on improving your website’s visibility on search engines. We use proven techniques and strategies to enhance your search rankings, drive organic traffic, and boost your online presence.",
    icon: <FaSearch />,
    href: "/services/seo-marketing",
    details:
      "With our SEO Marketing service, we employ a comprehensive approach to optimize your website for search engines. We conduct in-depth keyword research, perform technical SEO audits, and implement on-page and off-page strategies to improve your search engine rankings. Our team stays up-to-date with the latest SEO trends and algorithm changes to ensure that your website remains competitive. By enhancing your online visibility, we help you attract more qualified leads and drive sustainable growth.",
    details2:
      "Our SEO strategies are tailored to your specific business needs and goals. We focus on delivering measurable results by tracking key performance indicators and adjusting our tactics accordingly. Our goal is to increase your website’s search engine visibility, enhance user experience, and drive more organic traffic. Trust us to be your partner in achieving long-term SEO success and standing out in search engine results.",
    coverImage: "",
  },
  {
    id: 4,
    service: "Email Marketing",
    description:
      "Our Email Marketing service helps you connect with your audience through targeted and personalized email campaigns. We design and execute effective email strategies to drive engagement, nurture leads, and boost conversions.",
    icon: <FaMailBulk />,
    href: "/services/email-marketing",
    details:
      "Our Email Marketing service offers a strategic approach to reaching your audience through tailored email campaigns. We handle everything from designing visually appealing templates to crafting compelling content that resonates with your recipients. Our team segments your email list to ensure that messages are relevant and personalized. We also track campaign performance and optimize strategies to improve open rates, click-through rates, and overall engagement.",
    details2:
      "We leverage advanced analytics to measure the success of your email campaigns and make data-driven decisions. Our goal is to help you build stronger relationships with your audience, drive repeat business, and increase conversions. Whether you need to run promotional campaigns, send newsletters, or nurture leads, our email marketing solutions are designed to deliver results and enhance your communication strategy.",
    coverImage: "",
  },
  {
    id: 5,
    service: "Social Media Marketing",
    description:
      "Our Social Media Marketing service focuses on leveraging social media platforms to build your brand, engage with your audience, and drive traffic to your website. We create and manage impactful social media campaigns that align with your business goals.",
    icon: <FaFacebookF />,
    href: "/services/social-media-marketing",
    details:
      "Our Social Media Marketing service helps you harness the power of social media to grow your brand and connect with your audience. We develop and implement strategic social media campaigns that are designed to increase brand awareness, drive engagement, and generate leads. Our team creates compelling content, manages your social media profiles, and monitors performance to ensure that your campaigns achieve the desired results.",
    details2:
      "We use data-driven insights to tailor our social media strategies to your specific business needs. By analyzing audience behavior and trends, we optimize your campaigns for maximum impact. Our goal is to build a strong social media presence that resonates with your target audience and supports your overall marketing objectives. Partner with us to elevate your social media game and drive meaningful interactions with your brand.",
    coverImage: "",
  },
];

export const coreValues = [
  {
    id: 1,
    title: "Innovation",
    icon: <FaRocket />,
    text: "Pushing boundaries to deliver fresh, creative solutions that keep your business ahead of the curve.",
  },
  {
    id: 2,
    title: "Excellence",
    icon: <FaStar />,
    text: "Committed to delivering results with the highest standards, ensuring superior quality and outstanding performance in every project.",
  },
  {
    id: 3,
    title: "Integrity",
    icon: <FaShieldAlt />,
    text: "Building lasting relationships based on trust and transparency, maintaining honesty and accountability in all our interactions.",
  },
];

export const whyChooseUs = [
  {
    id: 1,
    title: "Tailored Solutions",
    icon: <FaCogs />,
    text: "We offer customized strategies designed specifically for your unique business needs, ensuring that every solution is tailored to drive the best possible results for you.",
  },
  {
    id: 2,
    title: "Expert Team",
    icon: <FaUsers />,
    text: "Our team comprises industry experts with a wealth of experience, committed to delivering high-quality results and providing strategic insights to elevate your business.",
  },
  {
    id: 3,
    title: "Proven Results",
    icon: <FaChartLine />,
    text: "We have a track record of success, with proven results in helping businesses achieve their marketing goals and grow their brand presence.",
  },
  {
    id: 4,
    title: "Client-Centric Approach",
    icon: <FaHandshake />,
    text: "Our approach is focused on understanding your business, listening to your needs, and working collaboratively to achieve your goals.",
  },
];




export const whyChooseUs2 = [
  {
    title: "Proven Track Record",
    description:
      "With years of experience in delivering exceptional marketing solutions, our track record speaks for itself. We've consistently achieved outstanding results for our clients, driving growth and enhancing their market presence through strategic, data-driven approaches.",
    icon: <FaTrophy />,
    href: "/contactUs",
    details:
      "Our success stories include major brand overhauls, successful product launches, and effective digital campaigns. Each project is a testament to our dedication and expertise, ensuring that we bring the same level of excellence to every client we work with. We pride ourselves on our ability to adapt to market changes and deliver results that surpass expectations.",
    details2:
      "Our team's diverse skills and extensive experience enable us to tackle complex challenges and deliver tailored solutions. By choosing us, you're partnering with a company that not only understands the intricacies of marketing but also knows how to apply this knowledge to achieve tangible outcomes for your business. Our commitment to transparency and client satisfaction is at the heart of everything we do.",
    coverImage: "path-to-image1.jpg",
  },
  {
    title: "Innovative Strategies",
    description:
      "We stay ahead of the curve by embracing the latest marketing trends and technologies. Our innovative strategies are designed to capture your target audience's attention and keep your brand at the forefront of your industry.",
    icon: <FaLightbulb />,
    href: "/contactUs",
    details:
      "Our approach involves continuous research and development to ensure that we use the most effective techniques and tools. From cutting-edge digital marketing tactics to creative campaign concepts, we bring fresh ideas that set your brand apart and drive measurable results.",
    details2:
      "Innovation is at the core of our service offerings. We are constantly exploring new ways to enhance your marketing efforts and deliver solutions that are not only effective but also unique to your brand. By choosing us, you gain access to a team that is dedicated to pushing boundaries and achieving excellence in every project we undertake. We turn creative ideas into actionable strategies that make a real impact.",
    coverImage: "path-to-image2.jpg",
  },
  {
    title: "Client-Centric Approach",
    description:
      "Your business is unique, and so are our solutions. We take the time to understand your specific needs and goals, ensuring that our strategies are customized to align with your vision and deliver the results you’re looking for.",
    icon: <FaHandshake />,
    href: "/contactUs",
    details:
      "Our client-centric approach means that we prioritize your needs and work closely with you throughout every stage of the process. From initial consultation to ongoing support, we ensure that you’re always informed and involved in the decisions that shape your marketing strategy. Your success is our top priority, and we’re committed to providing personalized service that meets your unique requirements.",
    details2:
      "We believe in building long-term relationships with our clients, and this starts with understanding your business inside out. Our team is dedicated to offering guidance and support tailored specifically to your objectives. By choosing us, you partner with a team that is genuinely invested in your success and committed to helping you achieve your goals through a collaborative and transparent process.",
    coverImage: "path-to-image3.jpg",
  },
  {
    title: "Comprehensive Services",
    description:
      "From strategy development to execution, we offer a full suite of marketing services to cover every aspect of your business needs. Whether you require a targeted advertising campaign or a complete digital transformation, we have the expertise to deliver results.",
    icon: <FaBox />,
    href: "/contactUs",
    details:
      "Our comprehensive range of services ensures that all your marketing needs are met under one roof. We handle everything from brand development and market research to campaign management and analytics. This holistic approach allows us to create integrated strategies that drive success across multiple channels and touchpoints.",
    details2:
      "We take pride in our ability to offer end-to-end solutions that address every facet of your marketing strategy. Our team works seamlessly to provide cohesive and effective services that align with your business goals. By choosing us, you benefit from a unified approach that streamlines your marketing efforts and maximizes your results.",
    coverImage: "path-to-image4.jpg",
  },
];

export const processes = [
  {
    icon: <FaClipboardList />,
    position: "",
    stagePosition: "lg:left-[55%] left-0",
    step: "STEP ONE",
    stage: "01",
    title: "Discovery & Research",
    text: "Our journey begins with a thorough discovery and research phase. We dive deep into understanding your business, market, and audience. Through comprehensive analysis and research, we identify key opportunities and challenges. This stage is crucial for developing a strategy that aligns with your goals and sets the foundation for all subsequent steps.",
  },
  {
    icon: <FaChartLine />,
    position: "lg:flex-row-reverse",
    stagePosition: "lg:right-[55%] right-0",
    step: "STEP TWO",
    stage: "02",
    title: "Strategy Development",
    text: "Based on our research findings, we craft a tailored marketing strategy. This involves setting clear objectives, defining target audiences, and outlining actionable plans. Our team develops a strategic roadmap that integrates innovative approaches with proven tactics to achieve your business goals. We ensure the strategy is flexible to adapt to any market changes.",
  },
  {
    icon: <FaCogs />,
    position: "",
    stagePosition: "lg:left-[55%] left-0",
    step: "STEP THREE",
    stage: "03",
    title: "Implementation",
    text: "We put the strategy into action. Our team executes the planned tactics, including content creation, digital campaigns, and other marketing activities. We focus on delivering high-quality outputs and ensuring every component of the strategy is effectively executed. Continuous monitoring and adjustments are made to optimize performance and achieve the best results.",
  },
  {
    icon: <FaChartBar />,
    position: "lg:flex-row-reverse",
    step: "STEP FOUR",
    stage: "04",
    stagePosition: "lg:right-[55%] right-0",
    title: "Analysis & Optimization",
    text: "The final step involves analyzing the results of our efforts. We assess the performance metrics, gather insights, and identify areas for improvement. Based on this analysis, we optimize the strategy to enhance effectiveness and drive better outcomes. Our goal is to continuously improve and ensure that your marketing efforts deliver the maximum return on investment.",
  },
];

export const reviewsData = [
  {
    name: "Aisha K.",
    location: "Lagos, Nigeria",
    image: "",
    reviewMessage:
      "I was impressed with the level of professionalism and creativity VistaVibe brought to our project. From the initial consultation to the final implementation, their team was always available to answer questions and provide guidance. The marketing campaign they developed for us was innovative and effective, helping us reach a wider audience than we ever imagined. VistaVibe is a partner you can trust!",
  },
  {
    name: "Emeka O.",
    location: "Abuja, Nigeria",
    image: "",
    reviewMessage:
      "Working with VistaVibe Marketing was a refreshing experience. They understood our local market and tailored their strategies to meet our specific needs. Their expertise in digital marketing helped us connect with our audience in ways we hadn’t considered before. The results were beyond our expectations, and we’ve seen a significant boost in customer engagement. I highly recommend VistaVibe!",
  },
  {
    name: "Sarah P.",
    location: "London, UK",
    image: "",
    reviewMessage:
      "VistaVibe Marketing is simply outstanding. They took our brand to new heights with their tailored strategies and insightful recommendations. Their deep understanding of the digital landscape and ability to adapt quickly to changes gave us a competitive edge. Our brand’s visibility has improved dramatically, and we’ve received countless positive feedback from our customers. Thank you, VistaVibe, for your exceptional service!",
  },
  {
    name: "James T.",
    location: "Manchester, UK",
    image: "",
    reviewMessage:
      "Our experience with VistaVibe Marketing has been nothing short of exceptional. They brought fresh ideas and a clear vision that aligned perfectly with our goals. The execution was flawless, and the results were immediate. We’ve seen a dramatic increase in website traffic and customer engagement. VistaVibe is a marketing powerhouse that delivers real results!",
  },
  {
    name: "Sophie L.",
    location: "Toronto, Canada",
    image: "",
    reviewMessage:
      "The results speak for themselves! VistaVibe's approach to marketing is both innovative and strategic. They helped us create a cohesive brand message that resonates with our target audience. The team’s dedication and expertise have been instrumental in growing our brand, and their personalized service made us feel valued every step of the way. We look forward to continuing our partnership with them!",
  },
  {
    name: "Liam W.",
    location: "Vancouver, Canada",
    image: "",
    reviewMessage:
      "VistaVibe Marketing has completely transformed our online presence. Their attention to detail and commitment to understanding our brand made all the difference. Our social media engagement has skyrocketed, and we’ve seen a significant increase in customer inquiries. The team was professional, responsive, and truly invested in our success. I couldn’t be happier with the results!",
  },
];


export const milestones = [
  {
    id: 1,
    year: "2013",
    text: "In 2013, we embarked on our journey with a vision to revolutionize the marketing industry. Our early efforts were focused on building a strong foundation, establishing key partnerships, and developing innovative strategies. A significant achievement was our collaboration with Tech Solutions Inc. to launch their inaugural digital marketing campaign, which set a new standard in their industry and showcased our commitment to innovative solutions.",
  },
  {
    id: 2,
    year: "2016",
    text: "By 2016, we had significantly expanded our service offerings and grown our client base. This milestone year was highlighted by our work with Global Tech Corp on a major rebranding initiative. We delivered a complete overhaul of their online presence, including a new website and a targeted social media campaign that resulted in a 40% increase in brand engagement and a 25% boost in sales. Our innovative approach and dedication to client success earned us widespread recognition.",
  },
  {
    id: 3,
    year: "2018",
    text: "2018 was a transformative year as we embraced cutting-edge technologies and data-driven insights. One of our key projects was with Eco Solutions Ltd., where we implemented advanced analytics and automation solutions for their marketing campaigns. This not only optimized their ad spend but also led to a 50% increase in lead generation. Our expertise in integrating technology with marketing strategies solidified our reputation as a leader in the field.",
  },
  {
    id: 4,
    year: "2023",
    text: "In 2023, we celebrated a decade of growth and innovation. A highlight of this year was our collaboration with Bright Future Enterprises to launch a global marketing campaign for their new product line. Our efforts included multi-channel advertising, influencer partnerships, and real-time performance tracking, which contributed to a record-breaking 60% increase in international sales. We expanded our global reach, launched new services, and achieved remarkable results for our clients, setting the stage for future successes.",
  },
];

export const teamMembers = [
  {
    id: 5,
    name: "Sophia Johnson",
    role: "Chief Executive Officer (CEO)",
    description:
      "Sophia Johnson is the visionary leader behind VistaVibe Marketing. With over 15 years of experience in the marketing industry, Sophia has a proven track record of driving growth and innovation. Her strategic insights and leadership have been pivotal in shaping the company's direction and establishing VistaVibe as a leader in marketing solutions.",
    xposition: "",
  },
  {
    id: 6,
    name: "Liam O'Connor",
    role: "Chief Marketing Officer (CMO)",
    description:
      "Liam O'Connor leads our marketing efforts with a passion for creativity and data-driven strategies. With a background in digital marketing and brand development, Liam ensures that VistaVibe's campaigns are impactful and align with client goals. His expertise in market analysis and campaign optimization is crucial to our success.",
    xposition: "lg:flex-row-reverse",
  },
  {
    id: 7,
    name: "Emma Martinez",
    role: "Head of Client Services",
    description:
      "Emma Martinez oversees our client relationships, ensuring exceptional service and satisfaction. With a background in account management and customer relations, Emma's role is vital in maintaining strong partnerships and delivering personalized marketing solutions. Her dedication to client success is a cornerstone of VistaVibe's reputation.",
    xposition: "",
  },
  {
    id: 8,
    name: "Aiden Patel",
    role: "Senior Digital Strategist",
    description:
      "Aiden Patel brings a wealth of experience in digital marketing and strategic planning. As a Senior Digital Strategist, Aiden designs and implements comprehensive digital strategies that drive results. His expertise in SEO, PPC, and social media advertising ensures that our campaigns are effective and data-driven.",
    xposition: "lg:flex-row-reverse",
  },
  {
    id: 9,
    name: "Olivia Lee",
    role: "Creative Director",
    description:
      "Olivia Lee leads our creative team with a keen eye for design and innovation. Her role involves crafting compelling visual and content strategies that capture our clients' brand essence. With a strong background in graphic design and multimedia, Olivia's creative direction is essential in producing engaging and impactful marketing materials.",
    xposition: "",
  },
];

export const works = [
  {
    id: 10,
    image: "/pexels4.webp",
    title: "Brand Revitalization for Tech Innovations Ltd.",
    description:
      "We led a comprehensive brand revitalization project for Tech Innovations Ltd., including a complete redesign of their visual identity, a strategic marketing campaign, and digital advertising. Our work helped Tech Innovations boost their market presence and increase brand recognition.",
    shortDescription:
      "Revitalized the brand identity and marketing strategy for Tech Innovations Ltd., enhancing their market presence.",
  },
  {
    id: 11,
    image: "/pexels9.webp",
    title: "Social Media Campaign for EcoGreen Solutions",
    description:
      "Developed and executed a highly successful social media campaign for EcoGreen Solutions, focusing on increasing engagement and driving traffic to their eco-friendly product line. The campaign resulted in a significant rise in social media followers and a 30% increase in online sales.",
    shortDescription:
      "Executed a social media campaign for EcoGreen Solutions, boosting engagement and increasing online sales by 30%.",
  },
  {
    id: 12,
    image: "/success.webp",
    title: "SEO Optimization for Urban Fashion Co.",
    description:
      "Provided SEO optimization services for Urban Fashion Co., including on-page and off-page strategies. Our efforts led to a substantial improvement in search engine rankings and organic traffic, helping Urban Fashion Co. reach new customers and increase online visibility.",
    shortDescription:
      "Enhanced SEO for Urban Fashion Co., improving search rankings and driving more organic traffic.",
  },
];
