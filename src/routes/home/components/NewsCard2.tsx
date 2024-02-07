import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { News } from "./NewsCarousel";

const NewsCard2: React.FC<News> = ({ header, date, link, imageURI }) => {
  return (
    <Card sx={{ maxWidth: 370 }}>
      <CardMedia component="img" height="140" image={imageURI} alt={header} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {header}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {date}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" component="a" href={link}>
          Read more
        </Button>
      </CardActions>
    </Card>
  );
};

export default NewsCard2;
