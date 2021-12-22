import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import MiltiCodeBlock from './MultiCodeBlock'

export const Container = styled.div`
    height: 464px;
    background: #2E3361;
    border-radius: 16px;
    width: 100%;
`

const ExampleCode = ({ samples, className }) => {
    const { allShiki } = useStaticQuery(graphql`
        query {
            allShiki {
                nodes {
                    content,
                    shiki,
                    name,
                    relativePath,
                }
            }
        }
    `)

    const shiki = allShiki.nodes.filter(code => samples.includes(code.relativePath));
    const data = shiki.map(item => ({
        name: item.name,
        source: item.content,
        content: item.shiki,
    }));

    return (
        <Container className={className}>
            <MiltiCodeBlock files={data} />
        </Container>
    )
}

export default ExampleCode;