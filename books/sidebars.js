/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // Define the tutorial sidebar manually to organize our content
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro', // This links to docs/intro.md
      label: 'Introduction'
    },
    {
      type: 'category',
      label: 'Module 1: Foundations',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'Module1/chapter1', // This links to docs/Module1/chapter1.md
          label: 'Chapter 1: Introduction to Physical AI'
        },
        {
          type: 'doc',
          id: 'Module1/chapter2', // This links to docs/Module1/chapter2.md
          label: 'Chapter 2: Robotics Fundamentals'
        },
        {
          type: 'doc',
          id: 'Module1/chapter3', // This links to docs/Module1/chapter3.md
          label: 'Chapter 3: Sensors and Actuators'
        },
        {
          type: 'doc',
          id: 'Module1/chapter4', // This links to docs/Module1/chapter4.md
          label: 'Chapter 4: Control Systems Basics'
        }
      ]
    },
    {
      type: 'category',
      label: 'Module 2: Humanoid Robotics',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'Module2/chapter5', // This links to docs/Module2/chapter5.md
          label: 'Chapter 5: Bipedal Locomotion'
        },
        {
          type: 'doc',
          id: 'Module2/chapter6', // This links to docs/Module2/chapter6.md
          label: 'Chapter 6: Motion Planning'
        },
        {
          type: 'doc',
          id: 'Module2/chapter7', // This links to docs/Module2/chapter7.md
          label: 'Chapter 7: Computer Vision for Robotics'
        },
        {
          type: 'doc',
          id: 'Module2/chapter8', // This links to docs/Module2/chapter8.md
          label: 'Chapter 8: Human-Robot Interaction'
        }
      ]
    },
    {
      type: 'category',
      label: 'Module 3: Advanced Topics',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'Module3/chapter9', // This links to docs/Module3/chapter9.md
          label: 'Chapter 9: Deep Learning for Robotics'
        },
        {
          type: 'doc',
          id: 'Module3/chapter10', // This links to docs/Module3/chapter10.md
          label: 'Chapter 10: Reinforcement Learning Applications'
        },
        {
          type: 'doc',
          id: 'Module3/chapter11', // This links to docs/Module3/chapter11.md
          label: 'Chapter 11: Real-world Deployments'
        },
        {
          type: 'doc',
          id: 'Module3/chapter12', // This links to docs/Module3/chapter12.md
          label: 'Chapter 12: Ethics and Safety'
        }
      ]
    },
    {
      type: 'doc',
      id: 'authoring-guide', // This links to docs/authoring-guide.md
      label: 'Content Authoring Guide'
    }
  ],
};

export default sidebars;