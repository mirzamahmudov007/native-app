# iQCRM Mobile App

A modern React Native mobile application built with Expo and Tailwind CSS for customer relationship management.

## Features

- 📊 **Dashboard** - Overview of key metrics and recent activities
- 🏠 **Home** - Welcome screen with quick actions and featured modules
- ℹ️ **About** - App information, features, and contact details
- 🎨 **Modern UI** - Beautiful interface with Tailwind CSS styling
- 📱 **Cross-platform** - Works on iOS, Android, and Web
- ⚡ **Fast Performance** - Built with React Native and Expo

## Screenshots

### Dashboard
- Statistics cards with key metrics
- Quick action buttons
- Recent activities feed

### Home
- Welcome header with gradient design
- Quick action buttons
- Featured modules list
- Today's overview statistics

### About
- App information and features
- Contact details with clickable links
- Version and build information

## Tech Stack

- **React Native** - Mobile app framework
- **Expo** - Development platform and tools
- **NativeWind** - Tailwind CSS for React Native
- **React Navigation** - Navigation between screens
- **Expo Vector Icons** - Icon library

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd iqCrm-mobile-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Run on your preferred platform**
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Press `w` for web browser
   - Scan QR code with Expo Go app on your phone

## Project Structure

```
iqCrm-mobile-app/
├── App.js                 # Main app component with navigation
├── package.json           # Dependencies and scripts
├── app.json              # Expo configuration
├── babel.config.js       # Babel configuration with NativeWind
├── tailwind.config.js    # Tailwind CSS configuration
├── assets/               # Static assets (icons, images)
├── screens/              # Screen components
│   ├── DashboardScreen.js
│   ├── HomeScreen.js
│   └── AboutScreen.js
└── README.md             # Project documentation
```

## Configuration

### Tailwind CSS
The app uses NativeWind to bring Tailwind CSS to React Native. The configuration is in `tailwind.config.js`.

### Navigation
The app uses React Navigation with bottom tabs for navigation between screens.

### Icons
Icons are provided by Expo Vector Icons (Ionicons).

## Development

### Adding New Screens
1. Create a new screen component in the `screens/` directory
2. Import and add it to the navigation in `App.js`
3. Add appropriate icons and styling

### Styling
- Use Tailwind CSS classes for styling
- Follow the existing design patterns
- Use the defined color palette in `tailwind.config.js`

### Icons
- Use Ionicons from `@expo/vector-icons`
- Choose appropriate icons for each feature
- Maintain consistency across the app

## Building for Production

### iOS
```bash
expo build:ios
```

### Android
```bash
expo build:android
```

### Web
```bash
expo build:web
```

## Customization

### Colors
Modify the color palette in `tailwind.config.js` to match your brand colors.

### Icons
Replace the placeholder icons with your own custom icons.

### Content
Update the content in each screen to match your specific use case.

## Troubleshooting

### Common Issues

1. **Metro bundler issues**
   ```bash
   npx expo start --clear
   ```

2. **NativeWind not working**
   - Ensure `nativewind/babel` is in `babel.config.js`
   - Restart the development server

3. **Navigation issues**
   - Check that all dependencies are installed
   - Ensure proper imports in `App.js`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions:
- Email: support@iqcrm.com
- Website: www.iqcrm.com
- Phone: +1 (555) 123-4567

---

Built with ❤️ using React Native and Expo 