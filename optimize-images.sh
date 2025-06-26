#!/bin/bash

# Restaurant Image Optimizer Script
# For Brian's lovable-eats-mirror-magic project

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "❌ ImageMagick not installed. Install with: brew install imagemagick"
    exit 1
fi

# Set directories
SOURCE_DIR="$HOME/Downloads/restaurant-images"  # Where you'll download the Drive images
TARGET_DIR="/Users/brianlapp/Documents/GitHub/lovable-eats-mirror-magic/images"

# Create target directory if it doesn't exist
mkdir -p "$TARGET_DIR"

# Counter for naming
counter=1

echo "🍕 Starting image optimization..."
echo "Looking in: $SOURCE_DIR"

# Process each image
for img in "$SOURCE_DIR"/IMG_*.jpg "$SOURCE_DIR"/IMG_*.jpeg "$SOURCE_DIR"/IMG_*.JPG; do
    if [ -f "$img" ]; then
        # Generate descriptive name (you can customize these)
        case $counter in
            1) name="appetizer-platter" ;;
            2) name="pasta-special" ;;
            3) name="pizza-margherita" ;;
            4) name="dessert-tiramisu" ;;
            5) name="salad-caesar" ;;
            6) name="lasagna-classic" ;;
            7) name="breadsticks-garlic" ;;
            8) name="wine-selection" ;;
            9) name="chef-special" ;;
            10) name="bruschetta-fresh" ;;
            *) name="dish-$counter" ;;
        esac
        
        # Optimize and resize
        echo "✨ Processing: $(basename "$img") → ${name}.jpg"
        convert "$img" \
            -resize 1200x1200\> \
            -quality 85 \
            -strip \
            "$TARGET_DIR/${name}.jpg"
        
        # Show file size reduction
        original_size=$(du -h "$img" | cut -f1)
        new_size=$(du -h "$TARGET_DIR/${name}.jpg" | cut -f1)
        echo "   📦 Size: $original_size → $new_size"
        
        ((counter++))
    fi
done

echo "✅ Done! Optimized $(($counter-1)) images"
echo "📍 Images saved to: $TARGET_DIR"
