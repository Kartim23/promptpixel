const prompts = [
  {
    "category": "Viral / Trending",
    "title": "Cinematic Flash Portrait",
    "description": "Turn a normal photo into a viral cinematic portrait.",
    "prompt": "Edit my uploaded photo into a cinematic social-media portrait. Preserve my face, identity, hairstyle and natural proportions. Add direct-camera flash, subtle motion-freezing detail, a dark urban background, realistic skin texture, crisp clothing detail, controlled shadows and premium cinematic color grading. Photorealistic, natural, high detail, 4K.",
    "tags": "viral, cinematic, flash"
  },
  {
    "category": "Viral / Trending",
    "title": "Night Street Glow",
    "description": "A moody night-street transformation.",
    "prompt": "Transform my photo into a realistic night street portrait. Keep my face and identity unchanged. Add glowing shop signs, wet pavement reflections, soft bokeh lights, realistic ambient shadows and a stylish urban atmosphere. Preserve natural skin texture and realistic proportions. Photorealistic, cinematic, 4K.",
    "tags": "night, street, glow"
  },
  {
    "category": "Viral / Trending",
    "title": "Luxury Flash Edit",
    "description": "A premium flash-photo aesthetic.",
    "prompt": "Create a premium nightlife flash photograph from my uploaded image. Preserve my identity and facial features. Use realistic on-camera flash, subtle background blur, elegant surroundings, natural skin texture, sharp clothing details and authentic photographic shadows. Avoid over-smoothing. Editorial social-media style, photorealistic, 4K.",
    "tags": "flash, luxury, editorial"
  },
  {
    "category": "Viral / Trending",
    "title": "Rain Glass Portrait",
    "description": "Portrait behind a rainy glass effect.",
    "prompt": "Turn my photo into a cinematic portrait photographed through a rain-covered glass window. Keep my face recognizable and unchanged. Add realistic water droplets and soft refraction, warm background lights, natural skin texture, shallow depth of field and atmospheric contrast. Photorealistic, 4K.",
    "tags": "rain, glass, moody"
  },
  {
    "category": "Viral / Trending",
    "title": "Red Carpet Moment",
    "description": "A celebrity-style event atmosphere without changing identity.",
    "prompt": "Transform my uploaded photo into a premium red-carpet event portrait. Preserve my exact facial identity and body proportions. Add elegant event lighting, subtle camera flashes, luxury venue bokeh and sophisticated color grading. Keep the result realistic rather than artificial. High-end editorial photography, 4K.",
    "tags": "red-carpet, event, premium"
  },
  {
    "category": "Viral / Trending",
    "title": "Mirror Flash Aesthetic",
    "description": "A trendy mirror-photo treatment.",
    "prompt": "Edit my uploaded mirror photo into a clean trendy flash aesthetic. Preserve my face, body proportions, clothing and pose. Improve lighting naturally, add realistic flash reflection, subtle background depth, crisp details and premium social-media color grading. No plastic skin or distorted anatomy. Photorealistic, 4K.",
    "tags": "mirror, flash, aesthetic"
  },
  {
    "category": "Viral / Trending",
    "title": "Golden Hour Viral Edit",
    "description": "A warm, shareable sunset portrait.",
    "prompt": "Transform my photo into a beautiful golden-hour portrait. Keep my face and identity unchanged. Add warm sunlight, realistic rim light, soft background bokeh, natural shadows and subtle film grain. Preserve realistic skin texture and facial details. Photorealistic, premium Instagram photography, 4K.",
    "tags": "golden-hour, sunset, viral"
  },
  {
    "category": "Viral / Trending",
    "title": "Blurred Motion City",
    "description": "Dynamic city portrait with realistic movement.",
    "prompt": "Create a cinematic city portrait from my photo while keeping my face and identity sharp and unchanged. Add realistic background motion blur, evening traffic lights, shallow depth of field and subtle film grain. Keep the subject anatomically accurate and naturally lit. Photorealistic, 4K.",
    "tags": "city, motion, cinematic"
  },
  {
    "category": "Viral / Trending",
    "title": "Phone Camera Upgrade",
    "description": "Make a casual phone photo look professionally shot.",
    "prompt": "Enhance my uploaded phone photo into a professional-looking photograph while preserving my identity, pose and clothing. Improve exposure, white balance, natural skin texture, background separation and lens depth without making it look over-edited. Authentic modern camera look, photorealistic, 4K.",
    "tags": "phone, enhance, realistic"
  },
  {
    "category": "Viral / Trending",
    "title": "Trending Color Grade",
    "description": "A modern social-media color grade.",
    "prompt": "Apply a modern cinematic color grade to my photo. Preserve the original face, identity, pose and environment. Add balanced contrast, natural skin tones, subtle teal-and-warm separation, gentle highlights and realistic shadows. Keep the image photographic and avoid excessive HDR or artificial smoothing. High detail, 4K.",
    "tags": "color-grade, trendy, cinematic"
  },
  {
    "category": "Portrait & Face",
    "title": "Clean Studio Headshot",
    "description": "Professional portrait with natural skin.",
    "prompt": "Create a professional studio headshot from my uploaded photo. Preserve my exact facial identity, hairstyle and natural proportions. Use softbox lighting, a clean neutral background, realistic skin texture, subtle facial shadows and sharp eyes. Avoid changing facial structure or making skin plastic. Photorealistic, 4K.",
    "tags": "portrait, studio, headshot"
  },
  {
    "category": "Portrait & Face",
    "title": "Soft Window Light",
    "description": "Natural portrait by a window.",
    "prompt": "Transform my photo into a realistic portrait lit by soft window light. Keep my face and identity unchanged. Add gentle directional light, natural skin texture, soft shadows and a subtle indoor background blur. Preserve realistic pores and facial details. Professional photography, photorealistic, 4K.",
    "tags": "window-light, natural, portrait"
  },
  {
    "category": "Portrait & Face",
    "title": "Black Background Portrait",
    "description": "Minimal dramatic portrait.",
    "prompt": "Create a dramatic studio portrait with a deep black background. Preserve my exact face and identity. Use a soft key light and subtle rim light, realistic skin texture, controlled shadows and sharp facial detail. Keep the result elegant and photographic, not overly retouched. 4K.",
    "tags": "black, dramatic, portrait"
  },
  {
    "category": "Portrait & Face",
    "title": "White Background Portrait",
    "description": "Clean profile-ready portrait.",
    "prompt": "Create a clean professional portrait on a soft white background. Keep my face, hairstyle and identity unchanged. Use even studio lighting, natural skin tones, subtle shadows and sharp facial details. Minimal retouching, realistic texture, professional camera quality, 4K.",
    "tags": "white, profile, clean"
  },
  {
    "category": "Portrait & Face",
    "title": "Close-Up Detail",
    "description": "High-detail facial portrait.",
    "prompt": "Turn my photo into a premium close-up portrait. Preserve my exact facial structure and identity. Use realistic soft lighting, sharp eyes, natural skin texture, detailed hair strands and shallow depth of field. Do not alter facial proportions. Photorealistic editorial photography, 4K.",
    "tags": "close-up, detail, face"
  },
  {
    "category": "Portrait & Face",
    "title": "Side Light Portrait",
    "description": "Moody directional lighting.",
    "prompt": "Edit my photo into a cinematic side-lit portrait. Keep my identity and facial features unchanged. Use directional light across one side of the face, realistic falloff, natural skin texture, subtle shadows and a dark neutral background. Premium photography, photorealistic, 4K.",
    "tags": "side-light, moody, portrait"
  },
  {
    "category": "Portrait & Face",
    "title": "Outdoor Natural Portrait",
    "description": "Authentic outdoor portrait.",
    "prompt": "Transform my photo into a natural outdoor portrait. Preserve my face, identity and body proportions. Add soft daylight, realistic greenery or urban background blur, natural skin tones and authentic shadows. Keep the image candid and photographic. High detail, 4K.",
    "tags": "outdoor, natural, portrait"
  },
  {
    "category": "Portrait & Face",
    "title": "Editorial Beauty Portrait",
    "description": "Fashion-editorial close portrait.",
    "prompt": "Create a high-end editorial beauty portrait from my photo. Preserve my facial identity and natural features. Add controlled studio lighting, elegant background, refined but realistic skin texture, detailed hair and premium magazine color grading. Avoid changing facial structure. Photorealistic, 4K.",
    "tags": "editorial, beauty, magazine"
  },
  {
    "category": "Portrait & Face",
    "title": "Film Camera Portrait",
    "description": "Analog-inspired realistic portrait.",
    "prompt": "Give my photo an authentic 35mm film-camera look while preserving my face and identity. Add subtle film grain, natural contrast, gentle highlight rolloff, realistic colors and shallow depth of field. Avoid excessive filters or artificial textures. Photorealistic, 4K.",
    "tags": "film, analog, portrait"
  },
  {
    "category": "Portrait & Face",
    "title": "Profile Picture Upgrade",
    "description": "Social profile image with clean composition.",
    "prompt": "Create a premium social-media profile picture from my uploaded photo. Keep my face and identity exactly recognizable. Use flattering natural lighting, clean background, subtle depth of field, sharp eyes and realistic skin texture. Center the composition for a profile crop. Photorealistic, 4K.",
    "tags": "profile, social, portrait"
  },
  {
    "category": "Couple & Romantic",
    "title": "Cinematic Couple",
    "description": "Romantic cinematic couple portrait.",
    "prompt": "Combine the uploaded couple photos into one realistic cinematic couple portrait. Preserve both people’s facial identities and natural proportions. Match lighting, perspective and skin tones, place them naturally together, and add warm cinematic background bokeh. Photorealistic, emotional, 4K.",
    "tags": "couple, cinematic, romantic"
  },
  {
    "category": "Couple & Romantic",
    "title": "Sunset Couple",
    "description": "Warm sunset romance.",
    "prompt": "Create a romantic sunset couple portrait from the uploaded photos. Preserve both faces and identities. Place them naturally in a golden-hour environment with warm rim light, realistic shadows, subtle breeze and soft background blur. Natural skin texture, photorealistic, 4K.",
    "tags": "couple, sunset, love"
  },
  {
    "category": "Couple & Romantic",
    "title": "Rainy Couple",
    "description": "Romantic rainy scene.",
    "prompt": "Transform the couple photos into a realistic rainy evening scene. Preserve both identities and body proportions. Add soft rain, wet reflections, warm street lights and natural interaction. Keep faces sharp and lighting consistent. Cinematic, photorealistic, 4K.",
    "tags": "couple, rain, romance"
  },
  {
    "category": "Couple & Romantic",
    "title": "Coffee Date",
    "description": "Casual cozy date atmosphere.",
    "prompt": "Create a realistic couple photo in a cozy modern café. Preserve both faces and identities. Match perspective and lighting, add warm indoor lights, natural expressions, realistic table details and shallow depth of field. Authentic candid photography, 4K.",
    "tags": "couple, cafe, cozy"
  },
  {
    "category": "Couple & Romantic",
    "title": "Travel Couple",
    "description": "Vacation-style couple photo.",
    "prompt": "Place the uploaded couple naturally together in a beautiful travel destination. Preserve faces and identities. Match lighting and perspective, add realistic environmental details and natural shadows. Make it look like an authentic travel photograph, not a composite. Photorealistic, 4K.",
    "tags": "couple, travel, vacation"
  },
  {
    "category": "Couple & Romantic",
    "title": "Black & White Couple",
    "description": "Timeless romantic monochrome.",
    "prompt": "Create an elegant black-and-white couple portrait. Preserve both identities, expressions and proportions. Use soft directional lighting, subtle film grain, realistic skin texture and emotional composition. Classic photography, photorealistic.",
    "tags": "couple, black-white, classic"
  },
  {
    "category": "Couple & Romantic",
    "title": "Holding Hands",
    "description": "Natural walking couple scene.",
    "prompt": "Create a realistic candid photo of the uploaded couple walking together and holding hands. Preserve both faces and identities. Use natural outdoor lighting, realistic anatomy, believable shadows and shallow background blur. Authentic lifestyle photography, 4K.",
    "tags": "couple, candid, lifestyle"
  },
  {
    "category": "Couple & Romantic",
    "title": "Formal Couple Portrait",
    "description": "Elegant formal couple photograph.",
    "prompt": "Create a premium formal couple portrait from the uploaded photos. Preserve both faces and identities. Dress them in elegant coordinated formal outfits, use refined studio lighting and a sophisticated neutral background. Keep anatomy and proportions realistic. 4K.",
    "tags": "couple, formal, elegant"
  },
  {
    "category": "Couple & Romantic",
    "title": "Polaroid Couple",
    "description": "Instant-film memory aesthetic.",
    "prompt": "Turn the couple photo into a realistic instant-film photograph. Preserve both faces and identities. Add subtle analog grain, soft flash, gentle warm tones and authentic instant-camera framing. Keep facial details natural. High detail.",
    "tags": "couple, polaroid, vintage"
  },
  {
    "category": "Couple & Romantic",
    "title": "Romantic Rooftop",
    "description": "Night rooftop couple scene.",
    "prompt": "Place the uploaded couple on a realistic rooftop at night. Preserve their identities and proportions. Add city lights, subtle moonlight, warm practical lighting and cinematic depth. Natural interaction, realistic shadows, photorealistic, 4K.",
    "tags": "couple, rooftop, night"
  },
  {
    "category": "Fashion & Instagram",
    "title": "Streetwear Editorial",
    "description": "Urban fashion shoot.",
    "prompt": "Transform my photo into a premium streetwear editorial. Preserve my face and identity, keep realistic body proportions, add a stylish urban outfit, textured city background, directional lighting and editorial color grading. Photorealistic, 4K.",
    "tags": "fashion, streetwear, editorial"
  },
  {
    "category": "Fashion & Instagram",
    "title": "Old Money",
    "description": "Classic luxury fashion aesthetic.",
    "prompt": "Transform my photo into an old-money inspired fashion portrait. Preserve my face and identity. Add a refined classic outfit, elegant architecture, soft natural lighting and muted premium colors. Keep fabrics and skin realistic. Photorealistic, 4K.",
    "tags": "fashion, old-money, luxury"
  },
  {
    "category": "Fashion & Instagram",
    "title": "Minimal Outfit Shot",
    "description": "Clean fashion catalog style.",
    "prompt": "Create a minimal fashion photograph from my uploaded photo. Preserve my face and body proportions. Use a clean studio or architectural background, soft lighting, realistic fabric texture and modern neutral color grading. Premium fashion photography, 4K.",
    "tags": "fashion, minimal, catalog"
  },
  {
    "category": "Fashion & Instagram",
    "title": "Denim Street Look",
    "description": "Casual denim editorial.",
    "prompt": "Edit my photo into a stylish denim street-fashion shoot. Keep my face and identity unchanged. Add realistic denim textures, urban architecture, soft directional light and subtle cinematic grading. Natural anatomy and skin texture, 4K.",
    "tags": "fashion, denim, street"
  },
  {
    "category": "Fashion & Instagram",
    "title": "Luxury Black Suit",
    "description": "Premium formal fashion.",
    "prompt": "Change my outfit to a tailored black suit while preserving my face, hairstyle and body proportions. Add elegant studio lighting, refined dark background, realistic fabric texture and premium editorial color grading. Photorealistic, 4K.",
    "tags": "suit, luxury, formal"
  },
  {
    "category": "Fashion & Instagram",
    "title": "Monochrome Fashion",
    "description": "High-fashion black-and-white look.",
    "prompt": "Create a high-fashion monochrome portrait from my photo. Preserve identity and proportions. Use dramatic studio lighting, clean composition, realistic clothing texture and subtle film grain. Editorial photography, high detail.",
    "tags": "fashion, monochrome, editorial"
  },
  {
    "category": "Fashion & Instagram",
    "title": "Summer Fashion",
    "description": "Bright outdoor fashion portrait.",
    "prompt": "Transform my photo into a stylish summer fashion shoot. Preserve my face and identity. Add natural sunlight, tasteful outdoor setting, realistic clothing texture, soft shadows and vibrant but believable colors. Photorealistic, 4K.",
    "tags": "fashion, summer, outdoor"
  },
  {
    "category": "Fashion & Instagram",
    "title": "Mirror Outfit",
    "description": "Premium mirror selfie.",
    "prompt": "Turn my mirror selfie into a polished fashion photograph. Preserve my face, outfit, pose and body proportions. Improve lighting naturally, clean distractions, maintain realistic reflections and add subtle depth. Do not distort the mirror or phone. Photorealistic, 4K.",
    "tags": "fashion, mirror, selfie"
  },
  {
    "category": "Fashion & Instagram",
    "title": "Sneaker Campaign",
    "description": "Streetwear sneaker campaign.",
    "prompt": "Create a realistic fashion campaign image from my photo featuring stylish sneakers. Preserve my face and identity. Use an urban setting, low-angle editorial composition, realistic materials, directional light and premium color grading. Photorealistic, 4K.",
    "tags": "fashion, sneakers, campaign"
  },
  {
    "category": "Fashion & Instagram",
    "title": "Magazine Cover Look",
    "description": "High-end fashion editorial.",
    "prompt": "Transform my photo into a high-end fashion magazine editorial image. Preserve my exact face and identity. Add professional studio lighting, sophisticated styling, clean composition and premium color grading. Photorealistic, realistic skin and fabric detail, 4K.",
    "tags": "fashion, magazine, premium"
  },
  {
    "category": "Cinematic",
    "title": "Movie Poster Portrait",
    "description": "Cinematic hero portrait without text.",
    "prompt": "Turn my photo into a cinematic movie-poster-style portrait without adding text. Preserve my face and identity. Add dramatic key lighting, atmospheric background, subtle haze, rich shadows and professional film color grading. Photorealistic, 4K.",
    "tags": "cinematic, movie, poster"
  },
  {
    "category": "Cinematic",
    "title": "Detective Noir",
    "description": "Classic noir atmosphere.",
    "prompt": "Transform my photo into a realistic film-noir portrait. Preserve my identity and facial features. Use hard side lighting, deep shadows, subtle fog and a dark urban environment. Add tasteful monochrome contrast and film grain. High detail.",
    "tags": "noir, cinematic, film"
  },
  {
    "category": "Cinematic",
    "title": "Action Hero",
    "description": "Dynamic cinematic hero frame.",
    "prompt": "Create a realistic cinematic action-hero frame from my photo. Preserve my face and body proportions. Add dramatic lighting, atmospheric dust, urban environment and subtle motion in the background while keeping the subject sharp. Photorealistic, 4K.",
    "tags": "action, hero, cinematic"
  },
  {
    "category": "Cinematic",
    "title": "Sci-Fi Corridor",
    "description": "Futuristic cinematic scene.",
    "prompt": "Place me naturally in a futuristic corridor. Preserve my face and identity. Add realistic practical lights, reflective surfaces, atmospheric haze and cinematic depth. Match lighting to the environment and maintain natural anatomy. Photorealistic, 4K.",
    "tags": "sci-fi, future, cinematic"
  },
  {
    "category": "Cinematic",
    "title": "Desert Film Frame",
    "description": "Epic desert movie scene.",
    "prompt": "Transform my photo into an epic cinematic desert scene. Preserve my face and identity. Add realistic sunlight, atmospheric dust, wide environmental depth and film-style color grading. Natural skin texture and proportions, photorealistic, 4K.",
    "tags": "desert, epic, film"
  },
  {
    "category": "Cinematic",
    "title": "Forest Mystery",
    "description": "Atmospheric forest frame.",
    "prompt": "Place me in a realistic misty forest scene. Preserve my identity and proportions. Add soft volumetric light through trees, subtle fog, natural textures and cinematic color grading. Keep the face clear and realistic. 4K.",
    "tags": "forest, mystery, cinematic"
  },
  {
    "category": "Cinematic",
    "title": "Luxury Hotel Scene",
    "description": "Elegant cinematic interior.",
    "prompt": "Transform my photo into a cinematic luxury-hotel portrait. Preserve my face and identity. Add warm practical lighting, elegant interior details, realistic reflections and shallow depth of field. Premium film look, photorealistic, 4K.",
    "tags": "hotel, luxury, cinematic"
  },
  {
    "category": "Cinematic",
    "title": "Train Window Scene",
    "description": "Travel-film aesthetic.",
    "prompt": "Create a cinematic photograph of me beside a train window. Preserve my face and identity. Add realistic evening light, subtle reflections, natural interior details and shallow depth of field. Authentic film still, photorealistic, 4K.",
    "tags": "train, travel, film"
  },
  {
    "category": "Cinematic",
    "title": "Rainy Cinema Frame",
    "description": "Emotional movie still.",
    "prompt": "Transform my photo into an emotional rainy cinematic frame. Preserve my identity. Add realistic rain, wet reflections, soft practical lights, atmospheric haze and subtle film grain. Keep skin texture natural and anatomy accurate. 4K.",
    "tags": "rain, movie, emotional"
  },
  {
    "category": "Cinematic",
    "title": "Golden Cinema Frame",
    "description": "Warm cinematic film still.",
    "prompt": "Create a warm cinematic film still from my photo. Preserve my face and identity. Use golden directional lighting, soft background separation, realistic shadows and subtle film grain. Natural colors, photorealistic, 4K.",
    "tags": "golden, film, cinematic"
  },
  {
    "category": "Mood / Sad / Rain",
    "title": "Lonely Rain",
    "description": "Melancholic rainy portrait.",
    "prompt": "Transform my photo into a realistic melancholic rainy scene. Preserve my face and identity. Add gentle rain, wet surroundings, cool tones, soft street lights and natural shadows. Keep the mood emotional but photographic, with realistic skin texture, 4K.",
    "tags": "sad, rain, lonely"
  },
  {
    "category": "Mood / Sad / Rain",
    "title": "Window Loneliness",
    "description": "Quiet indoor emotional portrait.",
    "prompt": "Place me beside a rainy window in a quiet room. Preserve my face and identity. Add soft window light, realistic raindrops, muted colors, subtle shadows and shallow depth of field. Natural skin texture, cinematic photography, 4K.",
    "tags": "sad, window, mood"
  },
  {
    "category": "Mood / Sad / Rain",
    "title": "Blue Mood",
    "description": "Cool-toned emotional portrait.",
    "prompt": "Give my photo a subtle blue-hour emotional atmosphere. Preserve identity and facial details. Use cool ambient light, soft shadows, gentle background blur and realistic skin tones. Avoid excessive blue tint. Photorealistic, 4K.",
    "tags": "blue, mood, portrait"
  },
  {
    "category": "Mood / Sad / Rain",
    "title": "Empty Street",
    "description": "Solitary cinematic street scene.",
    "prompt": "Place me naturally on an almost empty city street at night. Preserve my face and body proportions. Add realistic street lights, wet pavement, soft fog and cool cinematic grading. Keep the subject sharp and background atmospheric. 4K.",
    "tags": "lonely, street, night"
  },
  {
    "category": "Mood / Sad / Rain",
    "title": "Black Hoodie Mood",
    "description": "Dark casual portrait.",
    "prompt": "Edit my photo into a moody portrait wearing a simple black hoodie. Preserve my face and identity. Add soft directional lighting, dark neutral background, realistic fabric texture and subtle shadows. Photorealistic, cinematic, 4K.",
    "tags": "hoodie, dark, mood"
  },
  {
    "category": "Mood / Sad / Rain",
    "title": "Sunset Sadness",
    "description": "Quiet sunset silhouette.",
    "prompt": "Create a subtle emotional sunset portrait. Preserve my identity and proportions. Add warm low-angle sunlight, long natural shadows, soft sky gradient and gentle atmospheric depth. Keep facial details visible unless naturally silhouetted. Photorealistic, 4K.",
    "tags": "sunset, emotional, silhouette"
  },
  {
    "category": "Mood / Sad / Rain",
    "title": "Rainy Bus Stop",
    "description": "Cinematic waiting scene.",
    "prompt": "Place me realistically at a rainy bus stop at night. Preserve my face and identity. Add wet pavement reflections, shelter glass with droplets, soft traffic lights and natural cinematic shadows. Photorealistic, 4K.",
    "tags": "rain, bus-stop, cinematic"
  },
  {
    "category": "Mood / Sad / Rain",
    "title": "Foggy Morning",
    "description": "Quiet misty atmosphere.",
    "prompt": "Transform my photo into a realistic foggy morning portrait. Preserve identity and proportions. Add soft diffused light, gentle mist, muted natural colors and subtle depth. Keep the subject sharp and realistic. 4K.",
    "tags": "fog, morning, mood"
  },
  {
    "category": "Mood / Sad / Rain",
    "title": "Vintage Sad Film",
    "description": "Analog emotional portrait.",
    "prompt": "Give my photo a subtle vintage film aesthetic with a melancholic mood. Preserve my face and identity. Add gentle grain, muted colors, soft contrast and realistic shadows. Avoid heavy filters or facial changes. Photorealistic.",
    "tags": "vintage, sad, film"
  },
  {
    "category": "Mood / Sad / Rain",
    "title": "Night Window",
    "description": "Reflective night portrait.",
    "prompt": "Create a cinematic night portrait beside a window with city lights outside. Preserve my face and identity. Add realistic reflections, soft practical lighting, subtle bokeh and natural skin texture. Emotional but understated, photorealistic, 4K.",
    "tags": "night, window, emotional"
  },
  {
    "category": "Luxury / Lifestyle",
    "title": "Luxury Car Portrait",
    "description": "Premium lifestyle portrait.",
    "prompt": "Place me naturally beside a luxury car. Preserve my face, identity and body proportions. Match perspective, reflections and lighting realistically. Add a premium urban environment, subtle cinematic grading and authentic photographic shadows. 4K.",
    "tags": "luxury, car, lifestyle"
  },
  {
    "category": "Luxury / Lifestyle",
    "title": "Penthouse Scene",
    "description": "Modern luxury interior.",
    "prompt": "Place me in a modern luxury penthouse. Preserve my identity and proportions. Add realistic architectural details, warm window light, believable shadows and premium interior textures. Match lighting naturally. Photorealistic, 4K.",
    "tags": "luxury, penthouse, lifestyle"
  },
  {
    "category": "Luxury / Lifestyle",
    "title": "Business Class",
    "description": "Travel luxury aesthetic.",
    "prompt": "Create a realistic premium travel portrait inside a business-class aircraft cabin. Preserve my face and identity. Add realistic cabin lighting, seat details, natural reflections and sophisticated color grading. Photorealistic, 4K.",
    "tags": "travel, luxury, aircraft"
  },
  {
    "category": "Luxury / Lifestyle",
    "title": "Luxury Watch",
    "description": "Fashion portrait with watch detail.",
    "prompt": "Create a premium fashion portrait featuring a sophisticated wristwatch. Preserve my face and identity. Keep the watch realistic in size and perspective, with accurate reflections and materials. Add elegant lighting and editorial color grading. 4K.",
    "tags": "watch, luxury, fashion"
  },
  {
    "category": "Luxury / Lifestyle",
    "title": "Rooftop Lounge",
    "description": "Upscale evening lifestyle.",
    "prompt": "Place me at an elegant rooftop lounge at night. Preserve my identity and proportions. Add realistic city lights, warm practical lighting, glass reflections and shallow depth of field. Premium lifestyle photography, 4K.",
    "tags": "rooftop, luxury, night"
  },
  {
    "category": "Luxury / Lifestyle",
    "title": "Yacht Lifestyle",
    "description": "Coastal luxury portrait.",
    "prompt": "Place me naturally on a luxury yacht during golden hour. Preserve my face and identity. Add realistic ocean reflections, warm sunlight, believable shadows and premium travel photography composition. Photorealistic, 4K.",
    "tags": "yacht, luxury, travel"
  },
  {
    "category": "Luxury / Lifestyle",
    "title": "Luxury Hotel",
    "description": "Premium hotel lobby portrait.",
    "prompt": "Transform my photo into a luxury hotel lobby portrait. Preserve my identity and body proportions. Add elegant architecture, warm lighting, realistic reflections and cinematic depth. Photorealistic, 4K.",
    "tags": "hotel, luxury, lobby"
  },
  {
    "category": "Luxury / Lifestyle",
    "title": "Executive Office",
    "description": "Professional premium workspace.",
    "prompt": "Place me naturally in a modern executive office. Preserve my face and identity. Add realistic desk, glass and architectural details, soft daylight and professional color grading. Keep anatomy and perspective accurate. 4K.",
    "tags": "office, executive, luxury"
  },
  {
    "category": "Luxury / Lifestyle",
    "title": "Premium Café",
    "description": "Luxury café lifestyle shot.",
    "prompt": "Create a premium café lifestyle portrait. Preserve my face and identity. Add elegant interior design, warm natural lighting, realistic coffee and table details, shallow depth of field and editorial color grading. Photorealistic, 4K.",
    "tags": "cafe, luxury, lifestyle"
  },
  {
    "category": "Luxury / Lifestyle",
    "title": "Luxury Evening",
    "description": "Elegant night portrait.",
    "prompt": "Transform my photo into an elegant evening lifestyle portrait. Preserve my identity and proportions. Add sophisticated surroundings, warm practical lights, subtle bokeh and premium cinematic color grading. Photorealistic, 4K.",
    "tags": "evening, luxury, lifestyle"
  },
  {
    "category": "Travel & Background",
    "title": "Paris Street",
    "description": "European travel portrait.",
    "prompt": "Place me naturally on a charming European street inspired by Paris. Preserve my face and identity. Match lighting and perspective, add realistic architecture, pedestrians and soft daylight. Make it look like an authentic travel photograph, 4K.",
    "tags": "travel, paris, street"
  },
  {
    "category": "Travel & Background",
    "title": "Mountain Escape",
    "description": "Scenic mountain portrait.",
    "prompt": "Place me naturally in a beautiful mountain landscape. Preserve my face and identity. Add realistic atmospheric perspective, natural sunlight, detailed terrain and believable shadows. Keep the subject anatomically accurate. Photorealistic, 4K.",
    "tags": "mountain, travel, nature"
  },
  {
    "category": "Travel & Background",
    "title": "Beach Sunset",
    "description": "Relaxed coastal portrait.",
    "prompt": "Place me on a beautiful beach at sunset. Preserve my face and identity. Add realistic ocean reflections, warm sunlight, natural wind in clothing and soft atmospheric depth. Photorealistic travel photography, 4K.",
    "tags": "beach, sunset, travel"
  },
  {
    "category": "Travel & Background",
    "title": "Snow Trip",
    "description": "Winter travel scene.",
    "prompt": "Transform my photo into a realistic winter travel portrait. Preserve my face and identity. Add snowy mountains or a winter town, soft overcast lighting, realistic clothing texture and natural shadows. Photorealistic, 4K.",
    "tags": "snow, winter, travel"
  },
  {
    "category": "Travel & Background",
    "title": "Tokyo Night",
    "description": "Neon city travel portrait.",
    "prompt": "Place me naturally on a vibrant modern Tokyo-inspired street at night. Preserve my face and identity. Add realistic neon signs, wet pavement reflections, pedestrians and cinematic depth. Match environmental lighting to the subject. Photorealistic, 4K.",
    "tags": "tokyo, neon, travel"
  },
  {
    "category": "Travel & Background",
    "title": "Desert Road Trip",
    "description": "Cinematic road-trip scene.",
    "prompt": "Place me beside a realistic desert highway during golden hour. Preserve my face and identity. Add believable road perspective, warm sunlight, atmospheric dust and natural shadows. Travel-film photography, 4K.",
    "tags": "desert, road-trip, travel"
  },
  {
    "category": "Travel & Background",
    "title": "Waterfall Adventure",
    "description": "Nature adventure portrait.",
    "prompt": "Place me naturally near a dramatic waterfall. Preserve my identity and body proportions. Add realistic mist, water droplets, natural daylight and detailed foliage. Match lighting and perspective accurately. Photorealistic, 4K.",
    "tags": "waterfall, nature, adventure"
  },
  {
    "category": "Travel & Background",
    "title": "City Landmark",
    "description": "Travel landmark portrait.",
    "prompt": "Place me naturally in front of a recognizable-looking city landmark environment without altering my face or identity. Match scale, perspective, lighting and shadows realistically. Keep the image photographic and natural, 4K.",
    "tags": "city, landmark, travel"
  },
  {
    "category": "Travel & Background",
    "title": "Tropical Vacation",
    "description": "Bright tropical portrait.",
    "prompt": "Transform my photo into a realistic tropical vacation scene. Preserve my face and identity. Add palm trees, ocean or resort background, natural sunlight and believable shadows. Vibrant but realistic colors, 4K.",
    "tags": "tropical, vacation, beach"
  },
  {
    "category": "Travel & Background",
    "title": "Forest Cabin",
    "description": "Cozy nature getaway.",
    "prompt": "Place me near a beautiful forest cabin. Preserve my face and identity. Add realistic wood textures, soft morning light, trees and atmospheric depth. Natural lifestyle travel photography, photorealistic, 4K.",
    "tags": "cabin, forest, travel"
  },
  {
    "category": "Anime / Artistic",
    "title": "Anime Portrait",
    "description": "Stylized anime-inspired portrait.",
    "prompt": "Transform my uploaded photo into a polished anime-inspired illustration while preserving my recognizable facial structure, hairstyle, pose and overall identity. Use clean linework, expressive eyes, soft shading and a detailed atmospheric background.",
    "tags": "anime, illustration, portrait"
  },
  {
    "category": "Anime / Artistic",
    "title": "Hand-Painted Fantasy",
    "description": "Dreamy painted scene.",
    "prompt": "Turn my photo into a hand-painted fantasy illustration. Preserve recognizable facial features and pose. Add soft brush textures, warm atmospheric lighting, detailed natural surroundings and a gentle storybook mood.",
    "tags": "painting, fantasy, artistic"
  },
  {
    "category": "Anime / Artistic",
    "title": "Watercolor Portrait",
    "description": "Soft watercolor aesthetic.",
    "prompt": "Transform my photo into a refined watercolor portrait. Preserve the recognizable face, hairstyle and pose. Use delicate washes, subtle paper texture, soft edges and natural color transitions. Artistic but detailed.",
    "tags": "watercolor, art, portrait"
  },
  {
    "category": "Anime / Artistic",
    "title": "Comic Book",
    "description": "Graphic novel style.",
    "prompt": "Convert my photo into a polished comic-book illustration while preserving identity and pose. Use clean ink lines, controlled cel shading, dramatic composition and detailed background elements. High-quality graphic novel aesthetic.",
    "tags": "comic, graphic, illustration"
  },
  {
    "category": "Anime / Artistic",
    "title": "Oil Painting",
    "description": "Classic portrait painting.",
    "prompt": "Turn my photo into a realistic classical oil painting. Preserve recognizable facial features, expression and pose. Use rich brushwork, natural skin tones, dramatic soft lighting and textured canvas appearance.",
    "tags": "oil-painting, classic, art"
  },
  {
    "category": "Anime / Artistic",
    "title": "Pencil Sketch",
    "description": "Detailed graphite portrait.",
    "prompt": "Create a highly detailed graphite pencil sketch from my photo. Preserve facial proportions, expression and hairstyle. Use realistic shading, fine linework and paper texture. Keep the result hand-drawn and refined.",
    "tags": "pencil, sketch, portrait"
  },
  {
    "category": "Anime / Artistic",
    "title": "Cyber Anime",
    "description": "Futuristic anime portrait.",
    "prompt": "Transform my photo into a futuristic anime-inspired portrait. Preserve recognizable facial features and hairstyle. Add neon lighting, futuristic clothing details, atmospheric city background and polished cel shading.",
    "tags": "anime, cyberpunk, neon"
  },
  {
    "category": "Anime / Artistic",
    "title": "Dreamy Illustration",
    "description": "Soft illustrated social portrait.",
    "prompt": "Turn my photo into a dreamy digital illustration. Preserve my recognizable face and pose. Add soft gradients, subtle glow, atmospheric background and tasteful artistic texture. Keep the composition clean.",
    "tags": "illustration, dreamy, aesthetic"
  },
  {
    "category": "Anime / Artistic",
    "title": "Retro Poster Art",
    "description": "Vintage poster illustration.",
    "prompt": "Transform my photo into a stylish retro poster illustration. Preserve recognizable facial features and pose. Use bold but tasteful shapes, vintage print texture, controlled contrast and period-inspired color treatment.",
    "tags": "retro, poster, art"
  },
  {
    "category": "Anime / Artistic",
    "title": "Fantasy Hero",
    "description": "Illustrated fantasy character portrait.",
    "prompt": "Transform my photo into a premium fantasy-character portrait while preserving recognizable facial features and overall identity. Add cinematic fantasy clothing, atmospheric scenery, dramatic lighting and detailed painterly textures.",
    "tags": "fantasy, hero, illustration"
  },
  {
    "category": "Professional / Profile",
    "title": "LinkedIn Headshot",
    "description": "Professional business profile photo.",
    "prompt": "Create a professional business headshot from my uploaded photo. Preserve my exact facial identity and natural proportions. Use clean studio lighting, a subtle neutral background, realistic skin texture and polished but natural grooming. Photorealistic, 4K.",
    "tags": "linkedin, business, headshot"
  },
  {
    "category": "Professional / Profile",
    "title": "Resume Photo",
    "description": "Formal clean portrait.",
    "prompt": "Create a clean professional portrait suitable for a resume or professional profile. Preserve my face, hairstyle and identity. Use neutral background, soft even lighting and realistic skin texture. Avoid excessive retouching. Photorealistic, 4K.",
    "tags": "resume, professional, portrait"
  },
  {
    "category": "Professional / Profile",
    "title": "Creator Profile",
    "description": "Modern content-creator portrait.",
    "prompt": "Transform my photo into a modern creator profile image. Preserve my identity and facial features. Use a clean colorful but tasteful background, soft key light, sharp eyes and realistic skin texture. Social-media ready, photorealistic, 4K.",
    "tags": "creator, profile, social"
  },
  {
    "category": "Professional / Profile",
    "title": "YouTube Profile",
    "description": "Bold creator avatar.",
    "prompt": "Create a polished YouTube profile portrait from my photo. Preserve my face and identity. Use strong but natural lighting, clean background separation, crisp facial details and a composition that remains clear in a small circular crop. 4K.",
    "tags": "youtube, avatar, creator"
  },
  {
    "category": "Professional / Profile",
    "title": "Business Casual",
    "description": "Modern workplace portrait.",
    "prompt": "Transform my photo into a professional business-casual portrait. Preserve my face, hairstyle and identity. Add realistic smart-casual clothing, soft studio lighting and a clean office-style background. Natural skin texture, 4K.",
    "tags": "business, casual, office"
  },
  {
    "category": "Professional / Profile",
    "title": "Passport-Like Clean Portrait",
    "description": "Neutral identity-focused portrait.",
    "prompt": "Create a simple clean identity-focused portrait from my photo. Preserve my facial structure and identity exactly. Use even neutral lighting, plain background and realistic skin texture. No dramatic effects, no facial reshaping.",
    "tags": "clean, identity, portrait"
  },
  {
    "category": "Professional / Profile",
    "title": "Portfolio Portrait",
    "description": "Creative professional portrait.",
    "prompt": "Create a polished portfolio portrait from my photo. Preserve my exact face and identity. Use tasteful studio lighting, minimal creative background, realistic skin texture and professional color grading. Photorealistic, 4K.",
    "tags": "portfolio, creative, professional"
  },
  {
    "category": "Professional / Profile",
    "title": "Artist Profile",
    "description": "Creative studio portrait.",
    "prompt": "Transform my photo into a professional artist profile portrait. Preserve identity and natural proportions. Add a tasteful creative studio background, soft directional light and subtle editorial grading. Keep it authentic and photographic, 4K.",
    "tags": "artist, studio, profile"
  },
  {
    "category": "Professional / Profile",
    "title": "Founder Portrait",
    "description": "Premium founder-style portrait.",
    "prompt": "Create a premium founder portrait from my uploaded photo. Preserve my exact facial identity and body proportions. Use sophisticated office or studio lighting, clean composition and realistic skin texture. Professional editorial photography, 4K.",
    "tags": "founder, business, editorial"
  },
  {
    "category": "Professional / Profile",
    "title": "Minimal Avatar",
    "description": "Clean modern profile image.",
    "prompt": "Create a minimalist profile avatar from my photo. Preserve my face and identity. Use a simple background, soft flattering light, centered composition and realistic skin texture. Ensure the face remains clear at small size. Photorealistic, 4K.",
    "tags": "avatar, minimal, profile"
  }
];
const grid=document.getElementById('grid'), search=document.getElementById('search'), cats=document.getElementById('categories'), count=document.getElementById('resultCount');
let active='All', visible=12;
const categories=['All',...new Set(prompts.map(p=>p.category))];
categories.forEach(c=>{const b=document.createElement('button');b.className='cat'+(c==='All'?' active':'');b.textContent=c;b.onclick=()=>{active=c;visible=12;document.querySelectorAll('.cat').forEach(x=>x.classList.remove('active'));b.classList.add('active');render()};cats.appendChild(b)});
function filtered(){const q=search.value.toLowerCase().trim();return prompts.filter(p=>(active==='All'||p.category===active)&&(!q||(p.title+' '+p.description+' '+p.prompt+' '+p.tags.join(' ')).toLowerCase().includes(q)))}
function render(){const list=filtered();count.textContent=`${list.length} prompt${list.length===1?'':'s'}`;const shown=list.slice(0,visible);grid.innerHTML=shown.length?shown.map((p,i)=>`<article class="card"><div class="meta">${p.category}</div><h3>${escapeHtml(p.title)}</h3><p class="desc">${escapeHtml(p.description)}</p><div class="prompt">${escapeHtml(p.prompt)}</div><div class="tags">${p.tags.map(t=>`<span class="tag">#${escapeHtml(t)}</span>`).join('')}</div><button class="copy" data-index="${list.indexOf(p)}">📋 Copy Prompt</button></article>`).join(''):`<div class="empty">No prompts found. Try another search.</div>`;if(list.length>visible){const b=document.createElement('button');b.className='loadmore';b.textContent='Load more prompts';b.onclick=()=>{visible+=12;render()};grid.appendChild(b)}document.querySelectorAll('.copy').forEach(btn=>btn.onclick=()=>{const p=list[Number(btn.dataset.index)];navigator.clipboard.writeText(p.prompt).then(()=>{btn.textContent='✓ Copied';btn.classList.add('done');setTimeout(()=>{btn.textContent='📋 Copy Prompt';btn.classList.remove('done')},1400)}).catch(()=>{btn.textContent='Copy failed'})})}
function escapeHtml(s){return s.replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}
search.addEventListener('input',()=>{visible=12;render()});render();
