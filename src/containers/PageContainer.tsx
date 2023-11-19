import React from "react"
import { Container } from "reactstrap"

type Props = {
    children: React.ReactNode
}

export const PageContainer: React.FC<Props> = ({ children }) => {
    return (
        <div>
            <Container className="main" fluid>
                <Container>{children}</Container>
            </Container>
        </div>
    )
}

export default PageContainer
