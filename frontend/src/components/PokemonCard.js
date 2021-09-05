import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
        minWidth: 200
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)"
    },
    title: {
        fontSize: 14
    },
    pos: {
        marginBottom: 12
    }
});

export default function BusinessCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root} varient="outlined">
            <CardContent>
                <Typography variant="h5" component="h2">
                    {/* {business.company} */}
                    {props.business.company}
                </Typography>

                <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                >
                    {props.business.firstName} {props.business.lastName}
                </Typography>

                <Typography variant="body2" component="p">
                    Company Description:
                    <br></br>
                    {props.business.companyDescription}
                </Typography>

                <Typography className={classes.pos} color="textSecondary">
                    Varified or Not Varified
                </Typography>
            </CardContent>
            <div className={"learn"}>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </div>
        </Card>
    );
}