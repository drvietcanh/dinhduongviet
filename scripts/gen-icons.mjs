import sharp from 'sharp';

async function gen() {
  var w = 512, h = 512;
  var pad = Math.round(w * 0.1);
  var inner = w - pad * 2;
  var radius = Math.round(w * 0.2);

  var svg512 = '<svg width="' + w + '" height="' + h + '"><rect width="' + w + '" height="' + h + '" rx="' + radius + '" fill="white"/></svg>';

  await sharp({
    create: { width: w, height: h, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 0 } }
  })
    .composite([
      { input: Buffer.from(svg512), top: 0, left: 0 },
      { input: await sharp('public/icons/icon-512.png').resize(inner, inner).toBuffer(), top: pad, left: pad }
    ])
    .png()
    .toFile('public/icons/icon-512-maskable.png');
  console.log('512 maskable done');

  var svg192 = '<svg width="192" height="192"><rect width="192" height="192" rx="38" fill="white"/></svg>';

  await sharp({
    create: { width: 192, height: 192, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 0 } }
  })
    .composite([
      { input: Buffer.from(svg192), top: 0, left: 0 },
      { input: await sharp('public/icons/icon-512.png').resize(154, 154).toBuffer(), top: 19, left: 19 }
    ])
    .png()
    .toFile('public/icons/icon-192-maskable.png');
  console.log('192 maskable done');
}
gen().catch(function(e) { console.log('err', e.message); });
