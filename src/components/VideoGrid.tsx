
import { VideoCard } from "./VideoCard"

 const VIDEOS = [
    {
        title: "New song",
        thumbnail: "/photo.jpg",
        description: "Mix Song of 2023 with dance and singing it in full stream",
        viewCount: "1.3k",
        timestamp: "4 hours ago"
    },
    {
        title: "New song",
        thumbnail: "/photo.jpg",
        description: "Mix Song of 2023 with dance and singing it in full stream",
        viewCount: "1.3k",
        timestamp: "4 hours ago"
    },
    {
        title: "New song",
        thumbnail: "/photo.jpg",
        description: "Mix Song of 2023 with dance and singing it in full stream",
        viewCount: "1.3k",
        timestamp: "4 hours ago"
    },
    {
        title: "New song",
        thumbnail: "/photo.jpg",
        description: "Mix Song of 2023 with dance and singing it in full stream",
        viewCount: "1.3k",
        timestamp: "4 hours ago"
    },
    {
        title: "New song",
        thumbnail: "/photo.jpg",
        description: "Mix Song of 2023 with dance and singing it in full stream",
        viewCount: "1.3k",
        timestamp: "4 hours ago"
    },
    {
        title: "New song",
        thumbnail: "/photo.jpg",
        description: "Mix Song of 2023 with dance and singing it in full stream",
        viewCount: "1.3k",
        timestamp: "4 hours ago"
    },
    {
        title: "New song",
        thumbnail: "/photo.jpg",
        description: "Mix Song of 2023 with dance and singing it in full stream",
        viewCount: "1.3k",
        timestamp: "4 hours ago"
    },
    {
        title: "New song",
        thumbnail: "/photo.jpg",
        description: "Mix Song of 2023 with dance and singing it in full stream",
        viewCount: "1.3k",
        timestamp: "4 hours ago"
    },
    {
        title: "New song",
        thumbnail: "/photo.jpg",
        description: "Mix Song of 2023 with dance and singing it in full stream",
        viewCount: "1.3k",
        timestamp: "4 hours ago"
    },
    {
        title: "New song",
        thumbnail: "/photo.jpg",
        description: "Mix Song of 2023 with dance and singing it in full stream",
        viewCount: "1.3k",
        timestamp: "4 hours ago"
    }
]

export const VideoGrid = () => {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-10 pr-5">
     {VIDEOS.map(video => <div>
        <VideoCard
          title={video.title}
          image={video.thumbnail}
          thumbImage={video.thumbnail}
          author={"Harkirat Singh"}
          views={"100K"}
          timestamp={"2 days to go"}
        ></VideoCard>
        </div>)}
    </div>
}