import React from 'react';
import { Container } from '@mui/material';
import TokensTable from '../components/Tokens/TokensTable';
import TopTokensHighlights from '../components/Tokens/TopTokenHighlights';

const TokensPage = () => {
    return (
        <Container sx={{ padding: '20px' }}>
            <TopTokensHighlights />
            <TokensTable />
        </Container>
    );
}

export default TokensPage;