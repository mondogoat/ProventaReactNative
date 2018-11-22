# Proventa Event App

An app designed to improve strategy meeting experience. This allows  to viewing of schedules, reviewing facilitators and round table discussions, and staying connected to your favorite social media.

## Preview

![alt text](https://image.ibb.co/nhc0eq/proventa.png)


## Features
- `Schedule` - Browse the entire meeting list. Build your own personal schedule and save it to your calendar.
- `Explore` - Visually browse meeting media and build you schedule.
- `Map/Floor Plan`- Find venues, see interactive maps of the convention center and get directions.
- `Search` - Quickly find meetings, venues, or facilitators via keyword search.
- `Inquiry/Support` - Quickly message meeting staffs/facilitators.
- `Notification` - Get meeting updates.
- `Feedback` - Rate and give feedback to the meetings

### Technology Stack
 - Multi Tiered Architecture
 - React Native(Mobile Apps)
 - Ruby on Rails - API Server
 - NodeJS - Web App Admin Server
 - ReactJS - Web App Admin Client
 - Storage - AWS RDS, AWS DynamoDB
 - Notification - SNS and PinPoint by AWS
 - Cloud Infrastructure - Amazon Web Services

### Supported Devices
 - Android Phones (Mobile App)
 - iPhones(Mobile App)
 - Chrome browser(Web App Admin Client)

### Setup
Here is the usual development flow.

1. Clone repository then change directory `cd proventaapp`.
2. Install dependencies using `npm install`.
3. To test via the iPhone simulator, type `react-native run-ios`.
4. To test via the Android simulator, type `react-native run-android`.
