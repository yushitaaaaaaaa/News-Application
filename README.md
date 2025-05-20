# 📰 News Application

A mobile application built with **React Native** that provides users with access to **breaking news from around the world**. The app offers a **clean and intuitive interface**, **country selection**, **category filtering**, and a **responsive news feed** with detailed article views.

## 📱 Features

- Designed and developed a **mobile news application** that aggregates headlines from various countries and categories
- Implemented a **country selector** allowing users to browse news from **50+ different countries** worldwide
- Created a **drawer navigation system** with **categorized news sections** (Sports, Business, Entertainment, Science, Technology, Health)
- Built **responsive news cards** displaying article **title, description, author, and publication date**
- Enabled users to **open full news articles** in their device's browser
- Integrated **error handling** for API limitations and connectivity issues
- Implemented **pull-to-refresh functionality** for updating news content
- Persisted user's **country preference** using **AsyncStorage**
- Added a **splash screen with animation** for improved user experience
- Styled the app with a **consistent blue theme** using **custom components**
- **Future Enhancements:** Creating a detailed news view within the app, adding search functionality to find specific news articles and much more.

## 🔍 Notable Implementation

The application features a **comprehensive country selector** that allows users to switch between **50+ different countries**. However, due to **limitations of the free NewsAPI tier**, full functionality is not available, **only US news data is available** through the API. Future enhancements could include:
- Implementing a **proxy server** to handle API requests
- Upgrading to a **paid NewsAPI plan**
- Exploring **alternative news API services** with fewer regional restrictions

## 🛠️ Tech Stack

- **React Native with Expo** – for cross-platform mobile app development
- **Lottie** – For animated splash screen
- **NewsAPI** – For fetching current news articles
- **Custom Components** – For reusable and consistent UI elements

## 📝 API Reference

This application uses [NewsAPI](https://newsapi.org/) to fetch current news articles.

- Get top headlines by country: `GET https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY`
- Get top headlines by category: `GET https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=YOUR_API_KEY`
- You'll need to:
    1. Register at NewsAPI to get an API key
    2. Replace the API_KEY constant in the relevant files with your own key

## 🖼️ App Screenshots

Below are screenshots showcasing the core features and of the **News Application**:

<p align="center">
  <img src="https://github.com/user-attachments/assets/221a14db-a192-4640-afae-bbfdf782dbcb" alt="Animation Screen" width="240"/>   
  <img src="https://github.com/user-attachments/assets/f83a00d5-066c-4fdd-9812-b8ccb6144a0b" alt="Home Screen" width="240"/>  
  <img src="https://github.com/user-attachments/assets/feb62848-ed3f-4061-8c5f-ff029727d459" alt="Read More directs to" width="240"/> 
  <img src="https://github.com/user-attachments/assets/419a6e98-8f9a-47a2-9c57-4d27092257d0" alt="Country Selector Screen" width="240"/>  
  <img src="https://github.com/user-attachments/assets/f375c5e5-1103-4b38-bba6-6fcf9f818694" alt="India Screen" width="240"/>  
  <img src="https://github.com/user-attachments/assets/9abda97d-e8c0-4ae6-ab89-add60b9b7f2e" alt="Drawer Navigation Screen" width="240"/>
  <img src="https://github.com/user-attachments/assets/c3933326-36dd-4e36-8c69-e379a52aa58a" alt"Sports Screen" width="240"/>
  <img src="https://github.com/user-attachments/assets/9cb10f8b-e7aa-4145-b2dc-14ff3f9cbecb" alt="Business Screen" width="240"/>
  <img src="https://github.com/user-attachments/assets/235c1564-9ffd-411d-8297-921af1690846" alt="Entertainment Screen" width="240"/>
  <img src="https://github.com/user-attachments/assets/778e8490-f380-4c4b-a922-673b4c8a1078" alt="Science Screen" width="240"/> 
  <img src="https://github.com/user-attachments/assets/60f4da4e-0535-4f1e-8dda-35fa4e47e6c0" alt="Technology Screen" width="240"/>
  <img src="https://github.com/user-attachments/assets/a943d428-a22e-4dd8-8a74-baa69a7bd4e5" alt="Health Screen" width="240"/>
</p>
