// Imported verbatim from https://www.terveystech.com/case-studies/roi-based-volume-crop-with-cornerstone3d/ — keep the slug unchanged (SEO).
import type { CaseStudy } from "../caseStudies";

const caseStudy: CaseStudy = {
  "slug": "roi-based-volume-crop-with-cornerstone3d",
  "category": "Healthcare",
  "categories": [
    "Healthcare"
  ],
  "title": "ROI-Based Volume Editing with Cornerstone3D",
  "description": "In advanced medical imaging applications, precise manipulation of 3D volume-rendered images is crucial for improved diagnostic clarity and usability. To enhance user interaction…",
  "publishedAt": "2025-01-16",
  "image": {
    "src": "/images/case-studies/roi-based-volume-crop-with-cornerstone3d.png",
    "alt": ""
  },
  "featured": true,
  "detail": {
    "seoTitle": "ROI-Based Volume Editing with Cornerstone3D - Terveystech",
    "cover": {
      "src": "/images/case-studies/roi-based-volume-crop-with-cornerstone3d.png",
      "alt": ""
    },
    "body": [
      {
        "type": "heading",
        "id": "introduction",
        "text": "Introduction"
      },
      {
        "type": "p",
        "text": "In advanced medical imaging applications, precise manipulation of 3D volume-rendered images is crucial for improved diagnostic clarity and usability. To enhance user interaction and data precision, our team focused on integrating a CROP functionality within 3D volume-rendered images using the open-source Cornerstone3D library."
      },
      {
        "type": "heading",
        "id": "background",
        "text": "Background"
      },
      {
        "type": "p",
        "text": "Our application uses 3D volume rendering to visualize medical image data such as CT or MRI scans. While the rendering provided useful insights, users lacked the ability to isolate and examine specific regions of interest (ROIs) directly within the 3D volume. To address this limitation, we aimed to implement a CROP feature that enables interactive ROI selection and volume refinement."
      },
      {
        "type": "heading",
        "id": "challenge",
        "text": "Challenge"
      },
      {
        "type": "p",
        "text": "The primary challenges we faced included:"
      },
      {
        "type": "list",
        "items": [
          {
            "label": "Interactivity",
            "text": "Allowing users to intuitively draw and adjust a Region of Interest (ROI) within a complex 3D environment."
          },
          {
            "label": "Volume Manipulation",
            "text": "Modifying only the volume data within the ROI without disrupting the surrounding data."
          },
          {
            "label": "Performance",
            "text": "Maintaining smooth performance and rendering speed while applying real-time changes to the volumetric data."
          },
          {
            "label": "Integration",
            "text": "Seamlessly integrating the new functionality into our existing stack built with ReactJs and ElectronJs."
          }
        ]
      },
      {
        "type": "heading",
        "id": "solution",
        "text": "Solution"
      },
      {
        "type": "p",
        "text": "We successfully implemented the CROP functionality using Cornerstone3D, which provided flexible tools for volumetric data manipulation. Our approach included:"
      },
      {
        "type": "list",
        "items": [
          {
            "label": "Interactive ROI Drawing",
            "text": "Enabled users to draw ROI boundaries directly over the rendered volume."
          },
          {
            "label": "Mask Application",
            "text": "Applied a custom mask to isolate and preserve the voxel data inside the ROI while masking out external regions."
          },
          {
            "label": "Volume Update",
            "text": "Dynamically updated the displayed volume in real-time to reflect the cropped output."
          },
          {
            "label": "UI Integration",
            "text": "Integrated controls and ROI tools within the Electron-based desktop application, ensuring cross-platform support and a native user experience."
          }
        ]
      },
      {
        "type": "heading",
        "id": "outcome",
        "text": "Outcome"
      },
      {
        "type": "list",
        "items": [
          {
            "label": "Improved Usability",
            "text": "Users can now focus on specific areas of interest, significantly enhancing the diagnostic and analytical capabilities."
          },
          {
            "label": "Precision Control",
            "text": "The CROP functionality allows for granular control over the volumetric data, enabling better segmentation and analysis."
          },
          {
            "label": "Enhanced Workflow",
            "text": "Radiologists and researchers benefit from an optimized workflow where irrelevant or distracting volume data can be easily excluded."
          },
          {
            "label": "Performance Maintained",
            "text": "Thanks to efficient masking and rendering updates, performance remains smooth and responsive."
          }
        ]
      },
      {
        "type": "heading",
        "id": "conclusion",
        "text": "Conclusion"
      },
      {
        "type": "p",
        "text": "By integrating a CROP functionality using Cornerstone3D in our medical imaging application, we added a powerful tool for precision analysis within 3D rendered volumes. This enhancement not only empowers users with better control over volumetric data but also demonstrates the adaptability of open-source libraries like Cornerstone3D in real-world clinical and research scenarios."
      }
    ]
  }
};

export default caseStudy;
