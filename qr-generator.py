import qrcode

# Replace with your website link
url = "https://prady0t.github.io/aangan-tiffin/"

# Generate QR
qr = qrcode.make(url)

# Save as image
qr.save("my_website_qr.png")
