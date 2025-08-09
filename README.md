# AI Music Studio - Text to Music Generator

A modern web application that generates music from text descriptions using AI technology. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎵 **Text-to-Music Generation**: Convert text prompts into original music
- 🎧 **Advanced Music Player**: Full-featured audio player with controls
- 📱 **Responsive Design**: Works perfectly on desktop and mobile
- 🎼 **Music History**: Track and replay your generated music
- 🎨 **Modern UI**: Clean, professional interface with dark/light mode
- 📊 **AdSense Ready**: Optimized for Google AdSense integration

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Add sample music files to the `public` directory:
   - `sample-music-1.mp3` - Peaceful piano melody
   - `sample-music-2.mp3` - Upbeat electronic dance
   - `sample-music-3.mp3` - Acoustic guitar ballad
   - `sample-music-4.mp3` - Epic orchestral score
   - `sample-music-5.mp3` - Smooth jazz ensemble
   - `sample-music-6.mp3` - Ambient nature sounds

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:8000](http://localhost:8000) in your browser

## Sample Music Files

For demonstration purposes, you need to add sample MP3 files to the `public` directory. You can use any royalty-free music samples:

- **Free Music Sources:**
  - [Freesound.org](https://freesound.org) - Creative Commons audio
  - [Zapsplat](https://zapsplat.com) - Free sound effects and music
  - [YouTube Audio Library](https://studio.youtube.com/channel/UCuAXFkgsw1L7xaCfnd5JJOw/music) - Royalty-free music
  - [Incompetech](https://incompetech.com) - Kevin MacLeod's music library

## Google AdSense Integration

The application is designed to be AdSense-compliant:

1. **Ad Placement Areas**: Pre-configured ad slots in optimal positions
2. **Content Quality**: High-quality, original content structure
3. **User Experience**: Clean navigation and professional design
4. **Mobile Responsive**: Optimized for all device sizes

### Adding AdSense

1. Get approved for Google AdSense
2. Replace placeholder ad components in `src/components/AdPlacement.tsx`
3. Add your AdSense script to `src/app/layout.tsx`
4. Configure ad units for different positions

## API Integration

### Current Implementation
- Mock API with sample music matching
- Simulated processing delays
- Smart sample selection based on prompts

### Real AI Integration
To integrate with real AI music generation services:

1. **Replicate API** (Recommended):
   ```bash
   npm install replicate
   ```
   - Models: MusicGen, Riffusion, etc.
   - Pay-per-use pricing

2. **OpenAI API** (For lyrics/descriptions):
   ```bash
   npm install openai
   ```

3. **Custom Models**:
   - Self-hosted solutions
   - Local inference servers

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with header/footer
│   ├── page.tsx            # Homepage with music generator
│   ├── privacy/            # Privacy policy page
│   ├── terms/              # Terms of service page
│   └── api/
│       └── generate-music/ # Music generation API endpoint
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Site footer
│   ├── MusicGenerator.tsx  # Main music generation form
│   ├── MusicPlayer.tsx     # Audio player component
│   ├── MusicHistory.tsx    # Generated music history
│   └── AdPlacement.tsx     # AdSense ad containers
└── lib/
    └── utils.ts            # Utility functions
```

## Customization

### Styling
- Built with Tailwind CSS
- ShadCN UI components
- Fully customizable design system
- Dark/light mode support

### Features
- Add user authentication
- Implement music sharing
- Add social features
- Integrate payment systems
- Add music editing tools

## Deployment

### Vercel (Recommended)
```bash
npm run build
vercel deploy
```

### Other Platforms
- Netlify
- Railway
- DigitalOcean App Platform

## Legal Compliance

### Required Pages
- Privacy Policy (`/privacy`)
- Terms of Service (`/terms`)
- Cookie Policy (`/cookies`)

### Content Guidelines
- Original, high-quality content
- Family-friendly interface
- Clear user guidelines
- Proper attribution for samples

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions:
- Create an issue on GitHub
- Check the documentation
- Review the FAQ section

---

**Note**: This is a demonstration application. For production use, integrate with real AI music generation services and ensure all legal requirements are met.
