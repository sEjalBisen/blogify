import {ADD_BLOG_POST, DELETE_BLOG_POST} from '../actions/blogActions'

const initialState = {
  posts: [
    {
      title: 'The Rise of Soccer in the USA',
      subtitle: 'How Soccer is Becoming Popular in America',
      url: 'https://res.cloudinary.com/dpvbaiyus/image/upload/v1719128461/sports_t8di5h.avif',
      description:
        'Soccer, traditionally not a major sport in the USA, is rapidly gaining popularity. From increasing viewership to the establishment of new leagues, discover how soccer is transforming the American sports landscape.',
      category: 'Sports',
    },
    {
      title: 'Top Movies to Watch in 2024',
      subtitle: 'Must-See Films Coming This Year',
      url: 'https://res.cloudinary.com/dpvbaiyus/image/upload/v1719128672/entertainment_pnvi3f.webp',
      description:
        "From blockbusters to indie gems, 2024 promises a fantastic lineup of movies. Here are the top films you shouldn't miss, complete with trailers and release dates.",
      category: 'Entertainment',
    },
    {
      title: 'The Future of Online Learning',
      subtitle: 'How Technology is Transforming Education',
      url: 'https://res.cloudinary.com/dpvbaiyus/image/upload/v1719128460/education_rpwqgb.jpg',
      description:
        'Online learning has seen exponential growth, especially during the pandemic. This article explores the future trends in online education and the technologies driving this transformation.',
      category: 'Education',
    },
    {
      title: 'Olympics 2024: What to Expect',
      subtitle: 'Highlights and Predictions for the Upcoming Games',
      url: 'https://res.cloudinary.com/dpvbaiyus/image/upload/v1719128461/sports_t8di5h.avif',
      description:
        'As the world gears up for the 2024 Olympics, we take a look at the key events, athletes to watch, and potential records that might be broken in Paris. Get ready for an exciting spectacle of global sportsmanship.',
      category: 'Sports',
    },
    {
      title: 'The Impact of Social Media on Celebrity Culture',
      subtitle: 'How Instagram and Twitter are Changing Fame',
      url: 'https://res.cloudinary.com/dpvbaiyus/image/upload/v1719128672/entertainment_pnvi3f.webp',
      description:
        'Social media platforms like Instagram and Twitter have dramatically altered the landscape of celebrity culture. Learn how these platforms are influencing public perception and the lives of celebrities.',
      category: 'Entertainment',
    },
    {
      title: 'STEM Education: Preparing for the Future',
      subtitle: "Why STEM is Crucial for Tomorrow's Workforce",
      url: 'https://res.cloudinary.com/dpvbaiyus/image/upload/v1719128460/education_rpwqgb.jpg',
      description:
        'STEM education is essential for developing the skills needed in the modern workforce. Discover the importance of science, technology, engineering, and mathematics in schools and how it prepares students for future careers.',
      category: 'Education',
    },
  ],
}

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BLOG_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      }
    case DELETE_BLOG_POST:
      return {
        ...state,
        posts: state.posts.filter((_, index) => index !== action.payload),
      }
    default:
      return state
  }
}

export default blogReducer
