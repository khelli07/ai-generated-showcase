# Kompetisi Dunia Kreatif dengan Generative AI

This is our submission for [KORIKA generative AI competition](https://korika.id/read/press-release/kreatifai) which utilizes generative AI to create an art.

## About this work
Purpose: Promote Indonesian **AI-generated** arts about food, tourism, and culture **on an AI-generated platform/website**. 

We use 3 technologies here:
1. Text-to-text: ChatGPT, Github Co-Pilot
2. Text-to-image: Midjourney *(able to text_and_image-to-image as well)*
3. Text-to-video: HourOne

## How to Use

1. Provide `data-food.json` and `data-culture.json` which is an array of object with structure of
```json
{
    "filename": "photo_name.jpg",
    "caption": "Picture Caption: A String",
    "short_description": "This is a short description",
    "long_description": "This is a long description."
}
```

2. Generate detail pages using `js/generator.js` and change `line 55` corresponding to which `.json` name you want to generate.
3. Insert photos to `assets/images` with the same name as you put in the `.json`.
4. If you want to change the video, please don't forget to change `video.html` at `line 33`.
```html
<source src="assets/videos/<YOUR_VIDEO_NAME>.mp4" type="video/mp4" />
```
5. Page is ready! You can open it at `index.html`.


## Human intervention example

### Case 1: When error 
1. We give the error message to the bot and the bot will give the code for fixing it.
3. We will try to comprehend the instruction and do as it said. Sometimes it succeed, but sometimes it failed.
4. When the error still persist, human will try to give / pinpoint which it should repair, e.g. *can you fix the div class="image-card" ?*
5. However, after several iteration it still failed, we rollback / reversed to previous unbugged version and cancel the new feature.

### Case 2: Components
1. When the bot generate a section we dont want, we can customize by adding / removing it.
2. The bot will give css with colors, but when we want to change the color pallete, we will customize it. FYI, the some of the color is generate from the bot too, e.g. *can you give me colorful color pallete for promotion?*

### Case 3: Mechanism
We first tried to use 1 `index.html` even for the detail page. We wanted to make js script to mount and unmount the component. However, it did not succeed. So, we prompt a generator `js/generator.js` to generate the several html for each page. This mechanism is decided by human.

### Case 4: Folder structure
When we felt the structure is too disorganized, we tidied them up.


## Authors
Team Magnus:
- Maria Khelli (Lead) 
- Maharani Ayu Putri Irawan
- Malik Akbar Hashemi Rafsanjani