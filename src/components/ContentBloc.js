import React, { Component } from 'react';
import '../App.css';
import { Grid, Row, Col } from 'react-material-responsive-grid';

class HeaderBloc extends Component {
    render() {
        return (
            <div className="content">
                <Grid marginless={true}>
                    <Row>
                        <Col xs={4} lg={4} className="col-1">

                        </Col>
                        <Col hiddenDown="md" lg={6}>
                            <p>This column isn't visible for extra-small, small,
                                and medium screens, but is visible for large and
                                extra-large screens.  It consumes half of the row.</p>
                        </Col>
                        <Col hiddenDown="sm" hiddenUp="xl" md={12}>
                            <p>This column is only visible for medium and large
                                screens and consumes the entire row.</p>
                        </Col>
                        <Col hidden={['sm8', 'sm', 'lg']} xs4={4}>
                            <p>This column is hidden for small and large screens
                                and consumes the entire row.</p>
                        </Col>
                    </Row>

                </Grid>
            </div>
        );
    }
}

export default HeaderBloc;
