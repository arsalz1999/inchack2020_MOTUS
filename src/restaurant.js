import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


export default function Restaurant(props) {
    return (
        <div>
            <Card>
                <CardContent>
                    <Typography variant="body2" component="p">
                        Restaurant: {props.name}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Happiness: {props.happiness}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
};