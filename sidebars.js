const { listPaths } = require("./src/plugins/components");
//
// let inputs_docs = listPaths("inputs");
// let processors_docs = listPaths("processors");
// let outputs_docs = listPaths("outputs");
// let caches_docs = listPaths("caches");
// let rate_limits_docs = listPaths("rate_limits");
// let buffers_docs = listPaths("buffers");
// let metrics_docs = listPaths("metrics");
// let tracers_docs = listPaths("tracers");

let components = listPaths();

module.exports = {
  cookbooks: [
    // "cookbooks/Academy",
    // "cookbooks/document_cognition",
    // "cookbooks/getting_started",
    // "cookbooks/lead-gen-bot",
    // "cookbooks/transfer_chat",
    {
      type: "category",
      label: "Basic",
      items: [
        "cookbooks/Academy",
        "cookbooks/document_cognition",
        "cookbooks/getting_started",
        "cookbooks/lead-gen-bot",
        "cookbooks/transfer_chat",
      ],
    },
    {
      type: "category",
      label: "Understanding channels 101",
      collapsed: true,
      items: [
        "cookbooks/Understanding channels 101/whatsapp-chatbot-101",
        "cookbooks/Understanding channels 101/fbm-chatbot-101",
        "cookbooks/Understanding channels 101/gbm-chatbot-101",
      ]
    },
    {
      type: "category",
      label: "Model Bot",
      collapsed: true,
      items: [
        "cookbooks/model-bot/getting-started",
        "cookbooks/model-bot/exercises",
      ]
    }
  ],

  howtos: [
    {
      type: "category",
      label: "Basic",
      collapsed: false,
      items: [
        "howtos/basics/create-a-bot",
        "howtos/basics/signup-post-bot-invite",
        // "howtos/basics/publish-bot",
        "howtos/basics/access-management",
        "howtos/basics/add-faqs",
        // "howtos/basics/compare-code",
        "howtos/basics/variables-in-UI",
        "howtos/basics/validate-input",
        "howtos/basics/manage-support-agent",
        "howtos/basics/database-search",
        "howtos/basics/sensitive-info",
      ],
    },
    {
      type: "category",
      label: "Create",
      collapsed: true,
      items: [
        "howtos/create/cloud-function",
        "howtos/create/database-management",
        "howtos/create/api-management",
        "howtos/create/localisation",
        // "howtos/create/setup-did-you-mean",
        "howtos/create/whatsapp-bot",
        "howtos/create/whatsapp-notification-template",
        "howtos/create/whatsapp-notification-ym",
        "howtos/create/quickreply",
      ],
    },
    {
      type: "category",
      label: "Context Management",
      collapsed: true,
      items: ["howtos/context/add-contextual-response"],
    },
    {
      type: "category",
      label: "Web-Widget",
      collapsed: true,
      items: ["howtos/design/setup-web-widget"],
    },
  ],
  developer: [
    {
      type: "category",
      label: "Function reference",
      collapsed: true,
      items: ["developer/app/overview", ...components],
    },
    {
      type: "category",
      label: "API reference",
      collapsed: true,
      items: [
        "developer/app/apis/audience-api",
        "developer/app/apis/data-api",
        "developer/app/apis/platform-api",
      ],
    },
    {
      type: "category",
      label: "Events reference",
      collapsed: true,
      items: [
        "developer/app/events/agent-events",
        "developer/app/events/analytics-events",
        "developer/app/events/bot-events",
        "developer/app/events/user-events",
        "developer/app/events/voice-events",
      ],
    },
  ],

  platform_concepts: [
    {
      type: "category",
      label: "Studio",
      collapsed: false,
      items: [
        "platform_concepts/studio/overview",
        "platform_concepts/studio/journeys",
        "platform_concepts/studio/steps",
        "platform_concepts/studio/response-types-message",
        "platform_concepts/studio/response-types-action-logic",
        "platform_concepts/studio/response-types-cards",
        "platform_concepts/studio/template-journeys",
        "platform_concepts/studio/bot-knowledge",
        "platform_concepts/studio/training",
        "platform_concepts/studio/multilingual",
      ],
    },
    {
      type: "category",
      label: "Data",
      collapsed: true,
      items: [
        "platform_concepts/data/data-layer",
      ],
    },
    {
      type: "category",
      label: "Growth",
      collapsed: true,
      items: [
        "platform_concepts/growth/growth",
      ],
    },
    {
      type: "category",
      label: "Inbox",
      collapsed: true,
      items: [
        "platform_concepts/inbox/inbox",
      ],
    },
    {
      type: "category",
      label: "Engagement",
      collapsed: true,
      items: [
        "platform_concepts/engagement/engage",
      ],
    },
    {
      type: "category",
      label: "Channel Configuration",
      collapsed: true,
      items: [
        "platform_concepts/channelConfiguration/overview",
        "platform_concepts/channelConfiguration/web",
        "platform_concepts/channelConfiguration/android",
        "platform_concepts/channelConfiguration/ios",
        "platform_concepts/channelConfiguration/react-native",
        "platform_concepts/channelConfiguration/whatsapp",
        "platform_concepts/channelConfiguration/facebook-messenger",
        "platform_concepts/channelConfiguration/slack",
        "platform_concepts/channelConfiguration/teams",
        "platform_concepts/channelConfiguration/alexa",
        "platform_concepts/channelConfiguration/google-assistant",
        "platform_concepts/channelConfiguration/hangouts",
        "platform_concepts/channelConfiguration/ivr-bots",
        "platform_concepts/channelConfiguration/generic-webhook",
        "platform_concepts/channelConfiguration/fb-workplace",
        "platform_concepts/channelConfiguration/telegram",
        "platform_concepts/channelConfiguration/fb-lead-ads",
        "platform_concepts/channelConfiguration/whatsapp-configuration",
      ],
    },
    {
      type: "category",
      label: "App Configuration",
      collapsed: true,
      items: [
        "platform_concepts/appConfiguration/azure-ad",
        "platform_concepts/appConfiguration/freshdesk",
        "platform_concepts/appConfiguration/power-bi",
        "platform_concepts/appConfiguration/razorpay",
        "platform_concepts/appConfiguration/salesforce",
        "platform_concepts/appConfiguration/successfactors",
        "platform_concepts/appConfiguration/zalo",
        "platform_concepts/appConfiguration/zendesk",
      ],
    },
    {
      type: "category",
      label: "Compliances",
      collapsed: true,
      items: ["platform_concepts/compliances/certifications"],
    },
    {
      type: "category",
      label: "Omnichannel Notifications API",
      collapsed: true,
      items: [
        "platform_concepts/omniChannelNotifications/gettingStarted",
        "platform_concepts/omniChannelNotifications/sendMessage",
      ],
    },
  ],
};