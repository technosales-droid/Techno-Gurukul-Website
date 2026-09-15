export interface BlogPostType {
  id: number;
  title: string;
  image: string;
  detailImg: string;
  author: string;
  date: string;
  category: string;
  slug: string;
}

export interface TeamDataType {
  name: string;
  slug: string;
  role: string;
  image: string;
}

export interface EventDataType {
  img: string;
  location: string;
  detailImg: string;
  time: string;
  title: string;
  slug: string;
}

export interface CourseDataType {
  id: number;
  img: string;
  detailImg: string;
  icon: string;
  iconWidth: number;
  iconHeight: number;
  university: string;
  title: string;
  slug: string;
  lessons: number;
  students: number;
  category: string;
  authorImage: string;
  authorName: string;
  price: {
    old: string;
    current: string;
  };
  hover: {
    text: string;
    points: string[];
  };
}
