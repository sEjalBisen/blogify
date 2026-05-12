In this project, let's build a **Blog application-2** app by applying the
concepts we have learned till now.

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <video controls style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
        <source src="https://res.cloudinary.com/dpvbaiyus/video/upload/v1719312863/blog-categorize_ct1mnz.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://res.cloudinary.com/dpvbaiyus/image/upload/v1719312889/blog2small_mfeglx.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://res.cloudinary.com/dpvbaiyus/image/upload/v1719312891/blog2_cadoq4.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://res.cloudinary.com/dpvbaiyus/image/upload/v1719312892/blogcategory2_rj9hyu.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://res.cloudinary.com/dpvbaiyus/image/upload/v1719312892/blogcategory2latest_awt0pk.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- Initially,the main heading and input fields should be displayed.

- `Category Dropdown`
  - Include a select element with options **Education**, **Entertainment**, and
    **Sports**.
- `Input Value Handling:`
  - When non-empty values are provided in the input fields, the values inside
    the input elements should be updated accordingly.
- `Posting a Blog:`
  - When the **Post** button is clicked after filling in all the input fields
    and selecting a category, the input fields should be cleared to their
    initial values.
  - The new blog post should be added to the posts list and displayed when the
    **View Posts** button is clicked.
- `Viewing and Hiding Posts:`
  - When the **View Posts** button is clicked, all the posts should be
    displayed.
  - When the **Hide Posts** button is clicked, all the posts should be hidden.
  - The Category Selector should also be displayed along with the posts when the
    View Posts button is clicked
  - Whenever an option is selected from the category selector, only posts from
    the selected category should be rendered in the posts section.
- `Deleting a Blog Post:`
  - Each blog post should have a **Delete** button.
  - When the **Delete** button is clicked on a blog post, the blog post should
    be removed from the posts list.
- `Combined Functionality`
  - Ensure that the input value handling, posting, viewing/hiding, and deleting
    functionalities work together seamlessly.
  - The category selector should filter the posts displayed based on the
    selected category

</details>

<details>
<summary>Implementation Files</summary>
<br/>

Use these files to complete the implementation:

- `src/components/Blog/index.js`
- `src/components/Blog/index.css`
- `src/components/BlogItem/index.js`
- `src/components/BlogItem/index.css`
- `src/index.js`
- `src/actions/blogActions.js`
- `src/reducers/blogReducers.js`
- `src/reducers/blogCategoryReducers.js`

- `src/App.js`
- `src/index.js`
</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

- Ensure the input placeholders,headings match those shown in the video to pass
  the test cases.
- The category selector should filter the posts displayed based on the selected
  category.
- URL for testing post
  - [https://res.cloudinary.com/dpvbaiyus/image/upload/v1719308244/react-redux_rxraoo.png](https://res.cloudinary.com/dpvbaiyus/image/upload/v1719308244/react-redux_rxraoo.png)

</details>

### Resources

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #4a148c; width: 150px; padding: 10px; color: white">Hex: #4a148c</div>
<div style="background-color: #FFFFFFE6; width: 150px; padding: 10px; color:black">Hex: #FFFFFFE6</div>
<div style="background-color: #000000; width: 150px; padding: 10px; color: white">Hex: #000000</div>
<div style="background-color:#dddddd; width: 150px; padding: 10px; color: black">Hex: #dddddd</div>
<div style="background-color: #f9f9f9; width: 150px; padding: 10px; color: black">Hex: #f9f9f9</div>
<div style="background-color:#7e57c2; width: 150px; padding: 10px; color: white">Hex: #7e57c2</div>
<div style="background-color:#673ab7; width: 150px; padding: 10px; color: white">Hex: #673ab7</div>
<div style="background-color:#ab47bc; width: 150px; padding: 10px; color: white">Hex: #ab47bc</div>
<div style="background-color:#9c27b0; width: 150px; padding: 10px; color: white">Hex: #9c27b0</div>

</details>

<details>
<summary>Font-families</summary>

- Roboto
- Open Sans

</details>

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being
>   imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a
>   look at the Cheat Sheets.
