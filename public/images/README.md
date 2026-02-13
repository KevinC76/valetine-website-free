# Images Directory

This directory is for your personal photos and images.

## How to Use

1. **Replace Placeholder Images**: Add your own photos to this directory
2. **Naming Convention**: Use descriptive names (e.g., `our-first-date.jpg`, `favorite-moment.jpg`)
3. **Supported Formats**: JPG, PNG, WEBP
4. **Recommended Size**: 800x600px or larger for best quality

## Update Content File

After adding your images, update the image paths in:
```
src/lib/placeholder-content.ts
```

Change from:
```typescript
imagePlaceholder: "https://images.unsplash.com/photo-xxx..."
```

To:
```typescript
imagePlaceholder: "/images/your-photo.jpg"
```

## Example Structure

```
public/images/
├── memory-1.jpg
├── memory-2.jpg
├── memory-3.jpg
└── memory-4.jpg
```
