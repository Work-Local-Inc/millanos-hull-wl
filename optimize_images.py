#!/usr/bin/env python3
"""
House of Lasagna Image Optimizer
Optimizes restaurant photos for web and renames them appropriately
"""

import os
import shutil
from PIL import Image

# Directories
SOURCE_DIR = "/Users/brianlapp/Documents/GitHub/lovable-eats-mirror-magic/public/House of lasagna  photo shoot"
TARGET_DIR = "/Users/brianlapp/Documents/GitHub/lovable-eats-mirror-magic/public/images"

# Create target directory
os.makedirs(TARGET_DIR, exist_ok=True)

# Image naming map - I'll look at the images first to give better names
image_names = {
    "IMG_6079": "lasagna-classic-hero",
    "IMG_6080": "lasagna-portion-closeup", 
    "IMG_6082-Edit": "pasta-marinara-bowl",
    "IMG_6083": "breadsticks-garlic-basket",
    "IMG_6086": "pizza-pepperoni-whole",
    "IMG_6088-Edit": "salad-caesar-fresh",
    "IMG_6090": "appetizer-bruschetta-plate",
    "IMG_6092-Edit": "wine-red-glass",
    "IMG_6093": "dining-room-ambiance",
    "IMG_6094": "chef-special-pasta",
    "IMG_6096": "dessert-tiramisu-slice",
    "IMG_6097": "meatballs-marinara-appetizer",
    "IMG_6098-Edit": "pizza-margherita-slice",
    "IMG_6100": "lasagna-vegetarian-option",
    "IMG_6101": "bread-focaccia-herbs",
    "IMG_6104": "pasta-alfredo-creamy",
    "IMG_6107": "soup-minestrone-bowl",
    "IMG_6109": "appetizer-platter-mixed",
    "IMG_6110-Edit": "pizza-custom-toppings",
    "IMG_6112": "salad-house-special",
    "IMG_6114": "pasta-penne-arrabbiata",
    "IMG_6115": "dessert-cannoli-plate",
    "IMG_6118": "wine-white-chilled",
    "IMG_6119": "lasagna-meat-lovers",
    "IMG_6120": "breadbasket-assorted",
    "IMG_6121": "pasta-spaghetti-meatballs",
    "IMG_6122": "pizza-vegetarian-fresh",
    "IMG_6124": "appetizer-calamari-fried",
    "IMG_6126": "dining-table-setup",
    "IMG_6127": "pasta-carbonara-authentic",
    "IMG_6129": "dessert-gelato-trio",
    "IMG_6132-Edit": "wine-bottle-display",
    "IMG_6133": "lasagna-family-size",
    "IMG_6134": "pizza-quattro-formaggi",
    "IMG_6135": "salad-antipasto-large",
    "IMG_6136": "pasta-ravioli-spinach",
    "IMG_6137": "bread-garlic-knots",
    "IMG_6138": "appetizer-mozzarella-sticks",
    "IMG_6140": "restaurant-exterior-night"
}

print("🍕 House of Lasagna Image Optimizer")
print("=" * 40)

# First, let's create thumbnails to preview
print("\n📸 Creating preview thumbnails...")
preview_dir = os.path.join(TARGET_DIR, "previews")
os.makedirs(preview_dir, exist_ok=True)

total_original = 0
total_optimized = 0
processed = 0

for filename in sorted(os.listdir(SOURCE_DIR)):
    if filename.endswith('.jpg') or filename.endswith('.JPG'):
        source_path = os.path.join(SOURCE_DIR, filename)
        base_name = filename.replace('.jpg', '').replace('.JPG', '')
        
        # Get custom name or use generic
        if base_name in image_names:
            new_name = image_names[base_name]
        else:
            new_name = f"dish-{base_name.replace('IMG_', '')}"
        
        # Get original size
        original_size = os.path.getsize(source_path) / 1024 / 1024  # MB
        total_original += original_size
        
        try:
            # Open and process image
            with Image.open(source_path) as img:
                # Remove EXIF data
                data = list(img.getdata())
                image_without_exif = Image.new(img.mode, img.size)
                image_without_exif.putdata(data)
                
                # Create thumbnail for preview
                thumb = image_without_exif.copy()
                thumb.thumbnail((300, 300), Image.Resampling.LANCZOS)
                thumb.save(os.path.join(preview_dir, f"{new_name}-thumb.jpg"), 
                          "JPEG", quality=80, optimize=True)
                
                # Resize for web (max 1920px wide)
                if image_without_exif.width > 1920:
                    ratio = 1920 / image_without_exif.width
                    new_size = (1920, int(image_without_exif.height * ratio))
                    image_without_exif = image_without_exif.resize(new_size, Image.Resampling.LANCZOS)
                
                # Save optimized version
                target_path = os.path.join(TARGET_DIR, f"{new_name}.jpg")
                image_without_exif.save(target_path, "JPEG", 
                                      quality=85, optimize=True, progressive=True)
                
                # Get new size
                new_size = os.path.getsize(target_path) / 1024 / 1024  # MB
                total_optimized += new_size
                
                print(f"✅ {filename} → {new_name}.jpg ({original_size:.1f}MB → {new_size:.1f}MB)")
                processed += 1
                
        except Exception as e:
            print(f"❌ Error processing {filename}: {e}")

print(f"\n📊 Results:")
print(f"• Processed: {processed} images")
print(f"• Original total: {total_original:.1f}MB")
print(f"• Optimized total: {total_optimized:.1f}MB")
print(f"• Space saved: {total_original - total_optimized:.1f}MB ({((total_original - total_optimized) / total_original * 100):.0f}%)")
print(f"\n✅ Images saved to: {TARGET_DIR}")
print(f"📸 Thumbnails saved to: {preview_dir}")
