#!/bin/bash

# House of Lasagna Image Optimizer
# Optimizes and renames restaurant photos for web

# Set directories
SOURCE_DIR="/Users/brianlapp/Documents/GitHub/lovable-eats-mirror-magic/public/House of lasagna  photo shoot"
TARGET_DIR="/Users/brianlapp/Documents/GitHub/lovable-eats-mirror-magic/public/images"

# Create target directory
mkdir -p "$TARGET_DIR"

echo "🍕 House of Lasagna Image Optimizer"
echo "===================================="

# First, let's check file sizes
echo "📊 Current file sizes:"
total_size=0
for img in "$SOURCE_DIR"/*.jpg; do
    if [ -f "$img" ]; then
        size=$(du -k "$img" | cut -f1)
        total_size=$((total_size + size))
    fi
done
echo "Total size: $((total_size / 1024))MB"

# Image naming map (you can adjust these based on what you see)
declare -A image_names=(
    ["IMG_6079"]="lasagna-classic-hero"
    ["IMG_6080"]="lasagna-portion-closeup"
    ["IMG_6082-Edit"]="pasta-marinara-bowl"
    ["IMG_6083"]="breadsticks-garlic-basket"
    ["IMG_6086"]="pizza-pepperoni-whole"
    ["IMG_6088-Edit"]="salad-caesar-fresh"
    ["IMG_6090"]="appetizer-bruschetta-plate"
    ["IMG_6092-Edit"]="wine-red-glass"
    ["IMG_6093"]="dining-room-ambiance"
    ["IMG_6094"]="chef-special-pasta"
    ["IMG_6096"]="dessert-tiramisu-slice"
    ["IMG_6097"]="meatballs-marinara-appetizer"
    ["IMG_6098-Edit"]="pizza-margherita-slice"
    ["IMG_6100"]="lasagna-vegetarian-option"
    ["IMG_6101"]="bread-focaccia-herbs"
    ["IMG_6104"]="pasta-alfredo-creamy"
    ["IMG_6107"]="soup-minestrone-bowl"
    ["IMG_6109"]="appetizer-platter-mixed"
    ["IMG_6110-Edit"]="pizza-custom-toppings"
    ["IMG_6112"]="salad-house-special"
    ["IMG_6114"]="pasta-penne-arrabbiata"
    ["IMG_6115"]="dessert-cannoli-plate"
    ["IMG_6118"]="wine-white-chilled"
    ["IMG_6119"]="lasagna-meat-lovers"
    ["IMG_6120"]="breadbasket-assorted"
    ["IMG_6121"]="pasta-spaghetti-meatballs"
    ["IMG_6122"]="pizza-vegetarian-fresh"
    ["IMG_6124"]="appetizer-calamari-fried"
    ["IMG_6126"]="dining-table-setup"
    ["IMG_6127"]="pasta-carbonara-authentic"
    ["IMG_6129"]="dessert-gelato-trio"
    ["IMG_6132-Edit"]="wine-bottle-display"
    ["IMG_6133"]="lasagna-family-size"
    ["IMG_6134"]="pizza-quattro-formaggi"
    ["IMG_6135"]="salad-antipasto-large"
    ["IMG_6136"]="pasta-ravioli-spinach"
    ["IMG_6137"]="bread-garlic-knots"
    ["IMG_6138"]="appetizer-mozzarella-sticks"
    ["IMG_6140"]="restaurant-exterior-night"
)

# Process images
echo -e "\n🔧 Processing images..."
processed=0
new_total=0

for img in "$SOURCE_DIR"/*.jpg; do
    if [ -f "$img" ]; then
        # Get base name without extension
        base=$(basename "$img" .jpg)
        
        # Get custom name or use generic
        if [[ -n "${image_names[$base]}" ]]; then
            new_name="${image_names[$base]}"
        else
            # Fallback for any images not in our map
            new_name="dish-${base#IMG_}"
        fi
        
        # Optimize with ImageMagick
        echo -n "✨ $base → $new_name... "
        
        convert "$img" \
            -resize 1920x1920\> \
            -quality 85 \
            -strip \
            -interlace Plane \
            -gaussian-blur 0.05 \
            -colorspace sRGB \
            "$TARGET_DIR/${new_name}.jpg"
        
        # Get new size
        new_size=$(du -k "$TARGET_DIR/${new_name}.jpg" | cut -f1)
        new_total=$((new_total + new_size))
        echo "done! (${new_size}KB)"
        
        ((processed++))
    fi
done

echo -e "\n📈 Results:"
echo "• Processed: $processed images"
echo "• Original total: $((total_size / 1024))MB"
echo "• Optimized total: $((new_total / 1024))MB"
echo "• Space saved: $(( (total_size - new_total) / 1024 ))MB ($(( ((total_size - new_total) * 100) / total_size ))%)"
echo -e "\n✅ Images saved to: $TARGET_DIR"
