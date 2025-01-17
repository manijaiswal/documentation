---
title: Workflow campaign
sidebar_label: Workflow campaign
---



## 1. Introduction

The Workflow campaign lets you automate your marketing or collection campaigns by providing you the leverage to reach out to your customers on multiple channels. You can also configure fallback channels and check the delivery status of messages inside the workflow.

![](https://i.imgur.com/aJ1Espm.png)

:::note
The Workflow campaign is not an alternate to Scheduler of app.ym platform.
:::

### 1.1 Workflow vs. outbound campaigns

You can use Outbound campaigns only with a single channel and all the users will receive the same template. You cannot configure Fallbacks in case of failed notifications. 

With Workflow campaigns,  you can configure multiple channels and add fallbacks to each priority channel. 

### 1.2 Features & benefits

The following are some key benefits of Workflow campaigns - 

* Reach out to the target audience through multiple channels.
* Build Curated Flows based on the status of the outbound notification
* Higher chances of user engagement compared to single channel outbound campaigns
* Check in-flow outbound status.
* Better fallback handling for failed cases.
* Ability to call functions and APIs during execution.



### 1.3 Use cases


1. For Collection use-cases, the primary pain point of business is the reachability and to ensure that the user is getting the information about the pending or upcoming payment. 

   But the concerning issue could be that the user is inactive or unavailable on the primary channel used by the business. This creates a necessity for businesses to track the delivery status for each user and then run separate campaigns on a different channel.
   ![](https://i.imgur.com/ivewgA4.png)

> The above image shows a sample Workflow where three channels were used to ensure that the message is delivered to the user at least on one channel.

2. Workflow campaign can also increase the ROI of campaigns by targeting the users on lesser expensive channels as primary channel and then using the higher cost consuming channels as fallback channels to minimise the cost incurred in a single collection campaign.

![](https://i.imgur.com/zgoXaUP.png)

The above workflow shows how the campaign channels can be arranged by preference of low to high cost consumption channels to keep the overall campaign ROI high for the similar impression rate. 

:::note
One drawback of such type of campaigns is that the read rate for the lower cost incurring channels are also low compared to channels like WhatsApp.
:::

***

## 2. Create Workflow campaign

Workflow campaign is like a flow which you can trigger from the Engage Module. 

To create a Workflow campaign, follow these steps - 

1. Create a new flow (**Studio** > **Flows** > **Create flow**) to use in your Workflow campaign.

   ![](https://i.imgur.com/Tzc7zMP.png)

2. To the Start node add a new **Action** node, **Outbound notification**. There is no need to configure the start node for workflows.

  .   ![](https://i.imgur.com/clEtIEw.png)

![](https://i.imgur.com/Eo7aEiZ.png)

3. Map **To** to a CDP attribute of the notification type (for example, phone for WhatsApp, email for Email).
4. Use various *Action* nodes in between flows to fetch notification status; use the Delay node to add timeout.

![](https://i.imgur.com/gL830m9.png)

5. Map Template params properly with CDP Attribute or Bot variable so that the Template can be sent to the user.

:::note
* There should be at least 1-2 minutes delay between an Outbound Node and Notification Status Node.
* It is recommended to have at least 2-3 channels configured in a bot for  Workflow Campaigns to have better fallbacks.
* Currently, not all the Action Nodes are supported in a Workflow. Basic functionalities such as Outbound Nodes, Delay Nodes, and DB Updates are compatible with Workflow Campaign.
:::

6.  Once the flow configuration is completed, go to the **Engage** module (shortcut key: g + e) > **Journeys**.

 ![](https://i.imgur.com/2c0NMpg.png)

7. Click **Create Campaign**.

   a. Enter a **Journey trigger name**.

   b. Select a flow with outbound node that you want to associate with the campaign from the list of workflow journeys.

   c. Click **Next**.
   
   ![](https://i.imgur.com/TVYwXSw.png)

:::note
Invalid or incomplete (if *To* field not mapped) will throw as error message.
:::

8. Select your preferred target audience (segment). Make sure to add your users' CDP records to use it for any type of Campaigns.  Know more about [User 360](/docs/platform_concepts/engagement/cdp/overview).

   ![](https://i.imgur.com/9PD6caJ.png)

9. Schedule the campaign as per your preference. 

   ![](https://i.imgur.com/e8iigtP.png)
 
 10. Click **Launch campaign**.

The workflow campaign will be executed on the selected segment as per the configuration. By default, the status will be in pending and then moves to completed post execution. 

  ![](https://i.imgur.com/sUVITBo.jpg)


:::note
* Workflow Campaign might take some time to process due to the multi channel usage and other actions performed inside a user flow.
* You can download the report once the campaign is executed. The campaign status changes to *Completed*.
:::

 ### 2.1 Schedule campaign
 #### How many times should the campaign run? 

Option | - | Description
--------- | -- | --------
**Run once** | | To run campaign only once. <br/>In **When to run the campaign?**, choose <br/>*Now* to execute the campaign immediately, <br/>*Later* to execute the campaign on a specific **Date and time**.
**Run multiple times** | | To schedule a recurring campaign.
Repeat | | Choose the campaign frequency.
- | Daily | Select to execute the campaign daily at a specific time. Set the time using the time box.
-  | Weekly | Select to execute the campaign on a weekly basis. Select days of the week (Sun - Sat) using the respective check-boxes along with your preferred **Time** of execution. For example, run every *Sat and Sun at 9:00 AM*.
- | Monthly | Select to execute the campaign on a monthly basis. Select the date and time when you want to run the campaign using the respective options. <br/>For example, *Every 1 of the month at Time 10:00 AM*.
Ends | | 
- | Never | Choose to run the recurring campaign forever. 
- | On | Choose to end the campaign on a specific date. Select the date using the calendar box. For example, stop the campaign after 2023-12-30 11:00 AM.
- | After | Choose to end the campaign after certain occurrences. For example, stop the campaign after 10 occurrences.
 

***
 
 ## 3. Campaign reports

Workflow Campaign provides a snapshot of your Ongoing and Completed campaigns. There are multiple places where the analytics is showcased with respect to different information on each.

![](https://i.imgur.com/r7QVs9M.png)


### 3.1 View summary report

On the **Engage** > **Outbound** > **Journeys** page, click on the campaign for which you want to see the report. Choose your preferred duration using the date range boxes on the top-right.

   ![](https://i.imgur.com/SdZ6XOf.png)



### 3.2 View channel-wise report

To view channel-wise report, click View channel wise statistics.

   ![](https://i.imgur.com/mRmVyYC.png)


   ![](https://i.imgur.com/pOtMNMV.png)

* Total notifications sent - Channel wise: This shows the pie chart view of the total notifications and the contribution of each channel in percentages.
* User count: It shows the detailed break-up of message statuses (Sent, Delivered, Read, and Failed) for each channel.

### 3.3 Downoad report

To download a campaign report -  

Post completion of Workflow Campaigns, you can also download the report in a CSV file.

1. On the Journeys home page, navigate to the campaign and click the More options icon > **Request report**.

   ![](https://i.imgur.com/hLVOJxs.png)

2. An option to download the report is sent to your Slack. Click on the link.

   ![](https://i.imgur.com/rahrp4A.png)

3. Click **Download**.
   
   <img src="https://i.imgur.com/MCWoQpR.png" width="50%"/>


Here is an example of a sample CSV file - 

![](https://i.imgur.com/8NWIxEh.png)



Metric | Description
----- | ---------
BotId | Unique ID of the bot from which Campaign was triggered.
UserId | Phone number or email address of the user to which the campaign was sent.
Source | Channel through which the message was sent - WhatsApp, Email, SMS etc.
Status | Delivery status of the message.
IP Address | IP Address of the client if triggered using Workflow API (applicable only for Workflows triggered using API).
Message ID | Unique MsgID for the messages triggered.
Workflow ID | Unique Workflow ID of the specific campaign.
Custom payload | Any custom payload sent using the Workflow API.
Template ID | Unique ID of the template used to send the Workflow campaign.
Notification Sent By | Username of the platform user whose API key is used to trigger the Workflow using API (only for Workflows triggered using API).
Comments | Comments on the message sent. [Know more](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/notification-engine#23-status-codes-of-response).
Created Time | Time at which the record was create on the CSV.
Scheduled Time | Time at which the record was scheduled to be sent.
Updated Time | Time at which the status was last updated.

:::note
Delivery Status such as Delivered and Read are not available for all channels except WhatsApp.
:::