# Valentine Website — Customization Guide

This guide will help you personalize the Valentine website with your own content.

---

## 📝 Step 1: Replace Placeholder Text

Edit the content file: `src/lib/placeholder-content.ts`

### Hero Section
```typescript
hero: {
  headline: "Your custom romantic headline",
  subheadline: "Your custom subheadline",
  cta: "Your custom button text 💗",
}
```

### Personal Message
```typescript
personalMessage: {
  title: "Your section title",
  paragraphs: [
    "Your first paragraph...",
    "Your second paragraph...",
    // Add or remove paragraphs as needed
  ],
}
```

### Memory Gallery
```typescript
memories: [
  {
    id: 1,
    caption: "Your photo caption",
    imagePlaceholder: "/images/your-photo-1.jpg", // Update path
  },
  // Add more memories or remove as needed
]
```

### Emotional Peak
```typescript
emotionalPeak: {
  quote: "Your meaningful quote",
  author: "— Your signature",
}
```

### Final Note
```typescript
finalNote: {
  message: "Your closing message",
  closing: "Your final words",
  symbol: "Your emoji or text 💕",
}
```

---

## 🖼️ Step 2: Add Your Photos

1. **Add images** to `/public/images/` directory
2. **Recommended size**: 800×600px or larger
3. **Supported formats**: JPG, PNG, WEBP
4. **Update paths** in `src/lib/placeholder-content.ts`:

```typescript
imagePlaceholder: "/images/our-first-date.jpg"
```

**Current placeholder images** are from Unsplash and will work until you replace them.

---

## 🎵 Step 3: Add Background Music

1. **Choose a meaningful song** (see `/public/audio/README.md` for recommendations)
2. **Save as** `/public/audio/background-music.mp3`
3. **Keep file size** under 5MB
4. **Ensure** you have rights to use the music

> **Note**: If no music file exists, the music player button will not appear (no errors).

---

## 🎨 Step 4: Customize Colors (Optional)

Edit `/src/app/globals.css` to change the color palette:

```css
:root {
  --background: #FFF5F7;    /* Warm cream-pink */
  --primary: #E88DAE;       /* Soft rose */
  --secondary: #F6C1D1;     /* Blush */
  --accent: #C97A95;        /* Muted pink */
  --text-primary: #3A1F2B;  /* Dark text */
  --text-secondary: #6B4A57;/* Secondary text */
}
```

**Color Tips**:
- Keep the soft, warm aesthetic
- Avoid high contrast or harsh colors
- Test on mobile first

---

## 🔤 Step 5: Change Fonts (Optional)

Edit `/src/app/layout.tsx`:

```typescript
import { YourHeaderFont, YourBodyFont } from "next/font/google";

const headingFont = YourHeaderFont({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const bodyFont = YourBodyFont({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});
```

Browse fonts at [Google Fonts](https://fonts.google.com/)

---

## ✨ Step 6: Test Your Changes

### Run Development Server
```bash
npm run dev
```

Visit: `http://localhost:3000`

### Test On Mobile
1. Open site on your phone
2. Check all sections scroll smoothly
3. Test the music player
4. Verify images load properly

---

## 🚀 Step 7: Deploy

### Option 1: Vercel (Recommended)
1. Push code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy with one click
4. Share the URL with your Valentine 💕

### Option 2: Netlify
1. Push code to GitHub
2. Import project on [Netlify](https://netlify.com)
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

---

## 📱 Mobile-First Reminders

- Always test on mobile first
- Buttons should be thumb-friendly
- Text should be readable without zooming
- Animations should feel smooth, not janky

---

## 🎁 Final Touches

Before sharing:

- [ ] All placeholder text replaced
- [ ] Personal photos added
- [ ] Background music added (optional)
- [ ] Tested on mobile device
- [ ] Tested on desktop
- [ ] All animations working
- [ ] Music player tested
- [ ] Shared with your Valentine 💗

---

## 💡 Tips for Maximum Impact

1. **Choose the right moment** to share the link
2. **Send it as a surprise** — don't tell them what it is
3. **Make sure they're alone** so they can fully experience it
4. **Encourage them to turn on sound** for the full effect
5. **Let the website speak** — you don't need to over-explain

---

## ❤️ Remember

This website is a digital expression of your feelings. Take your time personalizing it. Every detail matters because it shows you care.

Good luck! 💕
