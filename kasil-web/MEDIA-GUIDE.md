# Kasil Media Guide

This guide explains how to add images and videos to your Kasil website.

## Directory Structure

All media files should be placed in the `public` folder:

```
kasil-web/
├── public/
│   ├── videos/
│   │   └── hero-video.mp4        # Hero background video
│   └── images/
│       ├── m5-touring.jpg         # Current project image
│       ├── m4-preview.jpg         # M4 upcoming project
│       └── m3-preview.jpg         # M3 upcoming project
```

## Adding Media Files

### Hero Background Video

The hero section plays a background video automatically when the site loads.

**Steps:**
1. Add your video file to `public/videos/hero-video.mp4`
2. The video will autoplay, loop, and be muted (required for autoplay)
3. Supported formats: MP4 (recommended), WebM

**Video Specifications:**
- Recommended resolution: 1920x1080 or higher
- Format: MP4 (H.264 codec)
- File size: Keep under 10MB for fast loading
- Aspect ratio: 16:9 or wider

**Current settings in Hero.jsx:**
```jsx
<video className="hero-video" autoPlay loop muted playsInline>
  <source src="/videos/hero-video.mp4" type="video/mp4" />
</video>
```

### Project Images

#### Current Project (M5 Touring)

To add an image to the BMW M5 Touring section:

1. Place image at `public/images/m5-touring.jpg`
2. Uncomment the image tag in `CurrentProject.jsx`:

```jsx
// In CurrentProject.jsx, find this line and remove the comment:
<img src="/images/m5-touring.jpg" alt="BMW M5 Touring" className="project-hero-image" />
```

#### Upcoming Projects

Images are already configured for M3 and M4 projects:

1. Add `public/images/m4-preview.jpg` for the M4
2. Add `public/images/m3-preview.jpg` for the M3
3. Images will automatically display when present

**Image Specifications:**
- Format: JPG or PNG
- Recommended size: 1920x1080 or 1600x900
- File size: Keep under 500KB for best performance
- Optimize images before uploading (use tools like TinyPNG)

## Image Optimization Tips

1. **Use appropriate formats:**
   - JPG for photos and complex images
   - PNG for images with transparency
   - WebP for modern browsers (best compression)

2. **Resize before uploading:**
   - Don't upload 4K images if they'll display at 1920px
   - Use image editing software to resize first

3. **Compress images:**
   - Use online tools: TinyPNG, Squoosh, or ImageOptim
   - Aim for 70-80% quality for JPGs

4. **Consider lazy loading** for images below the fold

## Adding More Images

### To add images to component cards:

Edit the component data in any `.jsx` file:

```jsx
const components = [
  {
    name: 'Carbon Front Lip',
    category: 'Front',
    image: '/images/components/front-lip.jpg' // Add this
  }
]
```

Then render in JSX:
```jsx
{component.image && (
  <img src={component.image} alt={component.name} />
)}
```

## Video Formats & Browser Support

### Supported Video Formats:
- **MP4 (H.264)** - Best browser support ✓
- **WebM (VP8/VP9)** - Good for Chrome/Firefox
- **OGG** - Older browsers

### Fallback Strategy:
```jsx
<video autoPlay loop muted playsInline>
  <source src="/videos/hero-video.mp4" type="video/mp4" />
  <source src="/videos/hero-video.webm" type="video/webm" />
  Your browser does not support video.
</video>
```

## Performance Considerations

### Video Performance:
- Keep hero video under 10MB
- Use compressed video formats
- Consider using a CDN for large files
- Use poster image as fallback

### Image Performance:
- Lazy load images below the fold
- Use responsive images with `srcset`
- Implement WebP with JPG fallback
- Use CSS `object-fit: cover` for responsive scaling

## Updating File Paths

If you want to change file locations:

1. **Hero Video:** Edit `/src/components/Hero.jsx` line 66
2. **Project Images:** Edit component files in `/src/components/`
3. **Update CSS** if changing class names

## Troubleshooting

**Video not playing:**
- Check file path is correct
- Ensure video is in `public/videos/` folder
- Verify video codec (H.264 recommended)
- Check browser console for errors

**Images not showing:**
- Verify file path starts with `/images/` (not `./images/`)
- Check file extension matches actual file
- Clear browser cache
- Check browser console for 404 errors

## Next Steps

1. Add your video to `public/videos/hero-video.mp4`
2. Add project images to `public/images/`
3. Uncomment image tags in components
4. Optimize all media files
5. Test on different devices and browsers

## Example File Names

Good naming conventions:
- `hero-video.mp4`
- `m5-touring-hero.jpg`
- `carbon-fiber-closeup.jpg`
- `wheel-detail.png`

Avoid:
- Spaces in filenames
- Special characters
- Very long names
