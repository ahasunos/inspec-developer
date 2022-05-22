export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "MITRE InSpec Profile Developers Course",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "icon": "home",
    "title": "MITRE InSpec Profile Developers Course",
    "heroImage": "/logo.svg",
    "heroText": "MITRE SAF InSpec Profile Developer",
    "tagline": "From Guidance Document to Automated Tests in no time!",
    "actions": [
      {
        "text": "Start the Class!",
        "link": "/course/"
      },
      {
        "text": "Go To the Development Lab",
        "link": "https://github.com/mitre/inspec-profile-developer-course-lab-environment"
      },
      {
        "text": "Getting Started with Ruby (text)",
        "link": "https://ruby-for-beginners.rubymonstas.org/"
      },
      {
        "text": "Ruby Walthrough (video)",
        "link": "https://www.youtube.com/watch?v=t_ispmWmdjY&vl=en"
      }
    ],
    "features": [
      {
        "title": "Markdown Enhance",
        "icon": "markdown",
        "details": "Add align, sup/sub script, footnote, tasklist, tex, flowchart, diagram, mark and presentation support in markdown",
        "link": "https://vuepress-theme-hope.github.io/v2/guide/markdown/"
      },
      {
        "title": "Describe the InSpec Framework and its Capabilities",
        "icon": "markdown",
        "details": "Create components, connected components, modules - and their tests - right from the CLI"
      },
      {
        "title": "Describe the architecture of an InSpec profile",
        "icon": "markdown",
        "details": "Understand InSpec and it's architecture"
      },
      {
        "title": "Build an InSpec profile to transform security policy into automated security testing",
        "icon": "markdown",
        "details": "Understand how as well as hands on development of InSpec profiles"
      },
      {
        "title": "Run an InSpec profile against a component of an application stack",
        "icon": "markdown",
        "details": "Learn how to utilize the profiles we build to run against an application stack"
      },
      {
        "title": "View and analyze InSpec results",
        "icon": "markdown",
        "details": "Learn how to analyze outputs of InSpec profiles in more human readable format"
      },
      {
        "title": "Report Results",
        "icon": "markdown",
        "details": "Create outputs of files that can be shared and reported out based on InSpec results"
      }
    ],
    "copyright": false,
    "footer": "Apache-2.0 | Copyright © 2022 - The MITRE Corporation",
    "summary": "",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://mitre.github.io/inspec-developer/"
        }
      ],
      [
        "meta",
        {
          "property": "og:site_name",
          "content": "SAF InSpec Profile Developers"
        }
      ],
      [
        "meta",
        {
          "property": "og:title",
          "content": "MITRE InSpec Profile Developers Course"
        }
      ],
      [
        "meta",
        {
          "property": "og:type",
          "content": "website"
        }
      ],
      [
        "meta",
        {
          "property": "og:locale",
          "content": "en-US"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [],
  "readingTime": {
    "minutes": 0,
    "words": 0
  },
  "filePathRelative": "README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
