'use client';
import React from 'react';
import { createLexicon, bookOptions } from './createLexicon'
import {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
  InputGroup,
  Dropdown,
  Spinner
 } from 'react-bootstrap';

import Lexicon from './Lexicon'
import PDFLexicon from './PDFLexicon'

export default function Home() {
  const [isGeneratingPDF, setIsGeneratingPDF] = React.useState(false);
  const [book, setBook] = React.useState('Genèse');
  const [frequency, setFrequency] = React.useState(50);
  const [lexicon, setLexicon] = React.useState([]);

  function handleChangeBook(e) {
    setBook(e.target.value);
    setLexicon([]);
  }

  function handleChangeFrequency(e) {
    setFrequency(e.target.value);
    setLexicon([]);
  }

  async function getBook(e) {
    e.preventDefault();
    setLexicon([]);
    setIsGeneratingPDF(true);
    let data = await createLexicon(book, frequency);
    setLexicon(data);
    setIsGeneratingPDF(false);
    // setViewPdf(true)
  }


  return (
    <Container fluid="sm">
      <Container className="p-5 pb-2 mb-4 bg-white rounded-3" fluid>
        <p className="chirho">📓</p>{/* ☧ */}
        <h1 className="header">Lexique du lecteur biblique</h1>
        <p className="description">Lexique verset par verset pour le lecteur de la Bible dans ses langues originales.</p>

        <Form className="mt-10 mb-4">
          <Row className="mb-3 align-items-end d-flex justify-content-center">
            <Col xs={12} md={3} className="mb-3" >
              <Form.Label>Livre</Form.Label>
              <Form.Select aria-label="Book selection" value={book} onChange={handleChangeBook}>
                <option>Choisir le livre</option>
                { bookOptions.map((book, id) => (
                  <option value={book} key={id}>{book}</option>
                ))}
              </Form.Select>
            </Col>

            <Col xs={12} md={3} className="mb-3" >
              <Form.Label>Nombre min. d'apparition des mots</Form.Label>
              <Form.Select aria-label="Frequency selection" value={frequency} onChange={handleChangeFrequency}>
                { [
                    { text: "Débutant (<200x)", value: 200 },
                    { text: "Intermédiaire (<100x)", value: 100 },
                    { text: "Connaisseur (<50x)", value: 50 },
                    { text: "Expert (<30x)", value: 30 },
                  ].map((option, id) => (
                  <option value={option.value} key={id}>{option.text}</option>
                ))}
              </Form.Select>
              {/* <Form.Control type="number" value={frequency} onChange={handleChangeFrequency}/> */}
            </Col>

            <Col xs="auto" className="d-flex align-items-baseline mb-3">
              <Button variant="dark" type="submit" onClick={getBook}>
                Génerer le lexique
              </Button>
            </Col>
          </Row>


        </Form>

        { !!lexicon.length && (
          <Alert variant="light">
            <Alert.Heading>📌 Lexique créé!</Alert.Heading>
            <p><b>{lexicon.length}</b> des mots du livre de <b>{book}</b> apparaissent moins de <b>{frequency}</b> fois dans { lexicon[0].strong[0] === 'G' ? "le Nouveau Testament" : "l'Ancien Testament" }.</p>
            <PDFLexicon frequency={frequency} data={lexicon} />
          </Alert>
        )}
      </Container>

      { isGeneratingPDF && (
        <Spinner id="loading-spinner" animation="border" />
      )}

      { !!lexicon.length && (
        // <PDFLexicon frequency={frequency} data={lexicon} />
        <Lexicon frequency={frequency} data={lexicon} />
      )}
    </Container>
  );
}
