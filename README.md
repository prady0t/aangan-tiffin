# आँगन - Traditional Home-cooked Hygienic Tiffin Service

A modern, responsive website for a traditional tiffin service business with WhatsApp integration for easy customer bookings.

## Features

- **Responsive Design**: Works perfectly on all devices
- **WhatsApp Integration**: Customers can book tiffins directly via WhatsApp
- **Contact Form**: Easy-to-use form for customer inquiries
- **Menu Display**: Interactive weekly menu for different plan types
- **Modern UI**: Beautiful, user-friendly interface

## WhatsApp Integration

The website now includes WhatsApp integration that allows customers to:

1. Fill out the contact form with their details
2. Click "Book Your Tiffin via WhatsApp" 
3. Automatically open WhatsApp with a pre-filled message containing all their details
4. Send the message to complete their booking

### How It Works

- Uses the `wa.me` API to create WhatsApp links
- Automatically detects mobile vs desktop devices
- Pre-fills the message with customer details (name, phone, email, plan, requirements)
- Provides fallback to email if WhatsApp fails to open

### Setup Instructions

1. **Update Phone Number**: In `script.js`, update the `whatsappNumber` variable with your actual WhatsApp number:
   ```javascript
   const whatsappNumber = '919876543210'; // Replace with your actual number
   ```
   
   **Important**: 
   - Remove the `+` symbol
   - Remove any spaces or special characters
   - Include the country code (e.g., 91 for India)

2. **Test the Integration**: 
   - Fill out the contact form
   - Click "Book Your Tiffin via WhatsApp"
   - Verify that WhatsApp opens with the pre-filled message

### Message Format

The pre-filled WhatsApp message includes:
- Customer name
- Phone number
- Email address
- Selected plan type
- Additional requirements
- Professional greeting and closing

## File Structure

- `index.html` - Main website structure
- `styles.css` - Styling and responsive design
- `script.js` - JavaScript functionality including WhatsApp integration
- `background.png` - Background image
- `my_website_qr.png` - QR code for easy access

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Mobile Optimization

- Responsive design for all screen sizes
- Touch-friendly interface
- WhatsApp app integration on mobile devices
- Optimized for mobile form submission

## Support

For technical support or questions about the WhatsApp integration, please contact the development team.

---

**Note**: The WhatsApp integration uses the official `wa.me` API and works best when users have WhatsApp installed on their device. On desktop, it will open WhatsApp Web.
