import imagemin from 'imagemin';
import imageminPngquant from 'imagemin-pngquant';
import imageminMozjpeg from 'imagemin-mozjpeg';

(async () => {
    console.log('Optimizing images...');
    
    // Optimize PNG files
    await imagemin(['public/assets/*.png'], {
        destination: 'public/assets/',
        plugins: [
            imageminPngquant({
                quality: [0.6, 0.8]
            })
        ]
    });
    
    // Optimize JPEG files
    await imagemin(['public/assets/*.{jpg,jpeg}'], {
        destination: 'public/assets/',
        plugins: [
            imageminMozjpeg({
                quality: 75
            })
        ]
    });
    
    console.log('Images optimized successfully!');
})(); 