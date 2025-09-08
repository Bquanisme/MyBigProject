import { Box, Button, Chip, Typography } from '@mui/material'
import React from 'react'
import FakeAPIForNews from '../API/FakeAPIForNews'

const News = () => {
  return (
    <Box sx={{backgroundColor: '#f5eeeeff'}}>
      {/* Highlight News */}
      <Box className='image-background-news'> </Box><br />
      <Typography sx={{fontSize: 30, p: 3, pl: 4, fontWeight: 'bold'}}>Mới nhất</Typography>
      <Box sx={{ display: "flex", gap: 2, mb: 5, p: 5, pt: 3, }}>
        <Box
          sx={{
            flex: 2,
            position: "relative",
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <img
            src={FakeAPIForNews.highlight.image}
            alt={FakeAPIForNews.highlight.title}
            style={{ width: "100%", height: '100%', objectFit: "cover" }}
          />
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: '50%',
              p: 3,
              bgcolor: "rgba(0,0,0,0.6)",
              color: "#f5f5f5",
              borderRadius: "0 0 8px 8px",
            }}
          >
            <Typography>{FakeAPIForNews.highlight.date}</Typography>
            <Typography variant="h6" fontWeight="bold">
              {FakeAPIForNews.highlight.title}
            </Typography>
            <Typography fontSize="14px" mt={1}>
              {FakeAPIForNews.highlight.description}
            </Typography>
            <Button size="small" sx={{ color: "orange", mt: 1 }}>
              Đọc thêm
            </Button>
          </Box>
        </Box>

        {/* Most Viewed */}
        <Box
          sx={{
            flex: 1,
            bgcolor: "#e9ddddff",
            p: 2,
            borderRadius: 2,
            maxHeight: '100%',
            overflowY: "auto",
          }}
        >
          <Typography fontWeight="bold" color="blue" mb={2}>
            Xem nhiều nhất
          </Typography>
          {FakeAPIForNews.mostViewed.map((news) => (
            <Box>
            <Box key={news.id} mb={2} sx={{display: 'flex', gap: 2}}>
              <Typography fontSize="13px" color="orange">
                Nổi bật
              </Typography>
              <Typography fontSize="13px" color="gray">
                {news.date}
              </Typography>
            </Box>
            <Typography fontWeight="500">{news.title}</Typography><br />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Cards */}
      <Box sx={{ display: "flex", gap: 3, mb: 0, p: 10, pt: 3 }}>
        {FakeAPIForNews.cards.map((card) => (
          <Box
            key={card.id}
            sx={{
              flex: 1,
              bgcolor: '#f5eeeeff',
              overflow: "hidden",
            }}
          >
            <img
              src={card.image}
              alt={card.title}
              style={{ width: "100%", height: 180, objectFit: "cover", borderRadius: 10 }}
            />
            <Box p={0} pt={2}>
              <Box sx={{display: 'flex', gap: 2}}>
                <Typography fontSize="13px" color="orange">
                  Nổi bật
                </Typography>
                <Typography fontSize="13px" color="gray">
                  {card.date}
                </Typography>
              </Box>
              <Typography fontWeight="bold" mt={1}>
                {card.title}
              </Typography>
              <Typography fontSize="14px" mt={1}>
                {card.description}
              </Typography>
              <Typography size="small" sx={{ color: "blue", mt: 1, cursor: 'pointer', fontWeight: 'bold'  }}>
                Đọc thêm
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Posts */}
      <Typography variant="h6" fontWeight="bold" mb={3} sx={{pl: 10, pt: 3, fontSize: 25}}>
        Bài viết
      </Typography>
      {FakeAPIForNews.posts.map((post) => (
        <Box
          key={post.id}
          sx={{
            display: "flex",
            gap: 2,
            mb: 0,
            p: 10,
            pt: 0,
            pr: 35
          }}
        >
          <Box sx={{ width: 250, height: 200, overflow: "hidden" }}>
            <img
              src={post.image}
              alt={post.title}
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 10,}}
            />
          </Box>
          <Box flex={1}>
            <Box sx={{display: 'flex', gap: 2}}>
            <Typography fontSize="13px" color="orange">
              Nổi bật
            </Typography>
            <Typography fontSize="13px" color="gray">
              {post.date}
            </Typography>
            </Box><br />
            <Typography fontWeight="bold" mb={1}>
              {post.title}
            </Typography>
            <Typography fontSize="14px">{post.description}</Typography>
            <Typography size="small" sx={{ color: "#3a2f68ff", mt: 1, cursor: 'pointer', fontWeight: 'bold' }}>
              Đọc thêm
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default News;
