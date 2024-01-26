/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ali Krema",
  title: "Ali Krema",
  subTitle: [
    emoji("Born and raised in Cairo, Egypt 🇪🇬"),
    emoji("CS @ University of Pennsylvania 🔴🔵 🇺🇸"),
    emoji("Software Engineer in practice 🧑🏽‍💻, Teacher at heart 👨🏽‍🏫")
  ],
  resumeLink:
    "https://drive.google.com/file/d/1230D0bsqzSVwNL_KJYS2XLhIWvBknh-3/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true, // Set false to hide this section, defaults to true
  titles: [
    "Software Engineer",
    "Teacher",
    "Language Learner",
    "Podcaster",
    "Mentor",
    "FIFA Guru"
  ],
  //TODO: add more pictures
  gallery: [
    require("./assets/images/picture1.jpg")
    // require("./assets/images/picture2.jpg")
  ]
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/alikrema",
  linkedin: "https://www.linkedin.com/in/ali-krema/",
  gmail: "alikrema2.0@gmail.com",
  facebook: "https://www.facebook.com/alikrema27",
  medium: "https://medium.com/@alikrema",
  twitter: "https://twitter.com/alikrrema",
  instagram: "https://www.instagram.com/alikrema1.0/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Software Engineer | Programming Instructor",
  skills: [
    emoji(
      "I love to build stuff and teach others how to build stuff. Interested in Software Development, CS Education, CS+Ed AI tools."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript/TypeScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Redis",
      fontAwesomeClassname: "fa fa-server"
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "NestJS",
      fontAwesomeClassname: "fab fa-wolf-pack-battalion"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Android Development",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "SQL/MariaDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "React/React-Native",
      fontAwesomeClassname: "fab fa-react"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Pennsylvania",
      logo: require("./assets/images/penn_logo.png"),
      subHeader: "Bachelors of Science in Engineering (BSE) - Computer Science",
      duration: "September 2019 - May 2023",
      desc: "Graduated Magna Cum Laude, GPA: 3.7"
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "STEM October High School",
      logo: require("./assets/images/stem_logo.png"),
      subHeader: "High School Diploma",
      duration: "September 2016 - May 2019",
      desc: emoji("This is where everything started. Forever grateful ❤️")
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Aydi",
      companylogo: require("./assets/images/aydiLogo.jpg"),
      date: "Jul 2023 – Present (Cairo, Egypt)",
      desc: "Enhancing worker productivity and providing software solutions to optimize field processes. Transforming agri-tech in MENA region, and globally! 🚀",
      descBullets: [
        "Backend Engineering + sprinkle of AI",
        "Casually transforming how agriculture works"
      ],
      link: {
        name: "Company Website",
        url: "https://www.aydi.com/"
      }
    },
    {
      role: "Course Instructor",
      company: "CIS1950: Intro to Android",
      companylogo: require("./assets/images/penn_android_logo.png"),
      date: "Jan 2023 – May 2023 (Philadelphia, PA)",
      desc: "Had the time of my life teaching an intro to Android class to an amazing cohort of 15 undergradautes at Penn. 🧑🏽‍💻💓",
      descBullets: [
        "Curriculum Design",
        "Course Instruction",
        "Grading",
        "Office Hours"
      ],
      link: {
        name: "Course Website",
        url: "https://cis1950android.github.io/staff/"
      }
    },
    {
      role: "Teaching Assistant",
      company: "CIS2400: Intro to Comp Sys.",
      companylogo: require("./assets/images/penn_logo.png"),
      date: "Sep 2020 – Dec 2022 (Philadelphia, PA)",
      desc: "Had the privilege of teaching 300+ students the fundamentals of Computer Systems. 💾👷🏽",
      descBullets: [
        "Assembly, C, Circuit Design",
        "Teaching sections of 25 students",
        "Final Exam Reviews",
        "Grading"
      ],
      link: {
        name: "Course Website",
        url: "https://www.seas.upenn.edu/~cis2400/22fa/#course-staff"
      }
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "A glimpse of what I built recently",
  projects: [
    {
      image: require("./assets/images/aydiLogo.jpg"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/aydiLogo.jpg"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/aydiLogo.jpg"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements 🏆 "),
  subtitle: "This is where I flex, basicallly",

  achievementsCards: [
    {
      title: "Onsi Sawiris Scholarship Recipient",
      subtitle:
        "The Onsi Sawiris Scholarship is a competitive, generous study abroad (US) scholarship with only 2-5 students accepted per year from Egypt.",
      image: require("./assets/images/osspLogo.png"),
      imageAlt: "OSSP Logo",
      footerLink: [
        {
          name: "Scholarship Link",
          url: "https://www.onsisawirisscholarship.org/"
        }
      ]
    },
    {
      title: "Max Mintz TA Hall of Famer",
      subtitle:
        "This award exemplifies the TA's ability to go above and beyond in their role as well as having a profound impact on the students they work with.",
      image: require("./assets/images/pennEngLogo.jpg"),
      imageAlt: "Penn Engineering Logo",
      footerLink: [
        {
          name: "View Hall of Fame",
          url: "https://www.cis.upenn.edu/ta-information/ta-hall-of-fame/"
        }
      ]
    },

    {
      title: "CIS Faculty Appreciation Award",
      subtitle:
        "This is a special award given by the faculty of the School of Engineering and Applied Science to recognize and honor outstanding students for their service to the University.",
      image: require("./assets/images/pennEngLogo.jpg"),
      imageAlt: "Penn Engineering Logo",
      footerLink: [
        {
          name: "View Award",
          url: "https://www.cis.upenn.edu/news/awards/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "My thoughts. Your thoughts?",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast: Overflow 🎙️"),
  subtitle:
    "I started Overflow in 2021 as a self-help podcast to shed the light on psychological issues that we all face, but are too afraid to talk about, focusing mainly on my experience in a very competitive enviornment in high school and college. All content is in Arabic.",
  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://open.spotify.com/embed/episode/1TKbaQm58SEGBGwLVWyJoX?utm_source=generator",
    "https://open.spotify.com/embed/episode/1LGQTfMJChzzi8mfsIqCQW?utm_source=generator"
  ],
  name: "Overflow",
  links: {
    youtube: "https://www.youtube.com/@overflowapodcast4070",
    spotify:
      "https://open.spotify.com/show/7iXbj2RTiHIEHSaz04OiMx?si=dfe1617832234c71",
    google:
      "https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy81NzFjN2RjOC9wb2RjYXN0L3Jzcw==",
    apple: "https://podcasts.apple.com/au/podcast/overflow/id1563528922"
  },
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me 🤙🏽"),
  subtitle: "Always happy to have a chat, tech or non-tech!",
  // number: "+201125440583",
  email_address: "alikrema2.0@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "alikrrema", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
