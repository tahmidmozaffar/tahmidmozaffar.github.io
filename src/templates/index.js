import Helmet from "react-helmet";
import React from "react";
import userConfig from "../../config";
import Layout from "./layout";
import Card from "../components/Card";
import Container from "../components/Container";
import Summary from "../components/Summary";

const IndexPage = ({ pageContext }) => {
    const { group } = pageContext;
    return (
        <Layout showHeader={true}>
            <Container>
                <Helmet
                    title={`${userConfig.title} | ${userConfig.author}`}
                    htmlAttributes={{ lang: "en" }}
                >
                    <meta
                        name="description"
                        content={`${userConfig.title} | ${userConfig.description}`}
                    />
                </Helmet>
                {group.map(({ node }) => (
                    <Card key={node.fields.slug}>
                        <Summary
                            date={node.frontmatter.date}
                            title={node.frontmatter.title}
                            excerpt={node.excerpt}
                            image={node.frontmatter.featuredImage}
                            slug={node.fields.slug}
                        />
                    </Card>
                ))}
            </Container>
        </Layout>
    );
};
export default IndexPage;
