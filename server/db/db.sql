--
-- PostgreSQL database dump
--

-- Dumped from database version 14.13 (Homebrew)
-- Dumped by pg_dump version 14.13 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: client_entries; Type: TABLE; Schema: public; Owner: tpl622_2
--

CREATE TABLE public.client_entries (
    client_entry_id integer NOT NULL,
    first_name character varying(50) NOT NULL,
    last_name character varying(50) NOT NULL,
    email character varying(320) NOT NULL,
    type character varying(50) NOT NULL,
    issue character varying(100) NOT NULL,
    age smallint NOT NULL,
    race character varying(100) NOT NULL,
    gender character varying(100) NOT NULL,
    comment character varying(400),
    created_at timestamp without time zone
);


ALTER TABLE public.client_entries OWNER TO tpl622_2;

--
-- Name: client_entries_client_entry_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl622_2
--

CREATE SEQUENCE public.client_entries_client_entry_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.client_entries_client_entry_id_seq OWNER TO tpl622_2;

--
-- Name: client_entries_client_entry_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl622_2
--

ALTER SEQUENCE public.client_entries_client_entry_id_seq OWNED BY public.client_entries.client_entry_id;


--
-- Name: professional_entries; Type: TABLE; Schema: public; Owner: tpl622_2
--

CREATE TABLE public.professional_entries (
    professional_entry_id integer NOT NULL,
    first_name character varying(50) NOT NULL,
    last_name character varying(50) NOT NULL,
    phone character varying(30) NOT NULL,
    email character varying(320) NOT NULL,
    comment character varying(400) NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.professional_entries OWNER TO tpl622_2;

--
-- Name: professional_entries_professional_entry_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl622_2
--

CREATE SEQUENCE public.professional_entries_professional_entry_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.professional_entries_professional_entry_id_seq OWNER TO tpl622_2;

--
-- Name: professional_entries_professional_entry_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl622_2
--

ALTER SEQUENCE public.professional_entries_professional_entry_id_seq OWNED BY public.professional_entries.professional_entry_id;


--
-- Name: client_entries client_entry_id; Type: DEFAULT; Schema: public; Owner: tpl622_2
--

ALTER TABLE ONLY public.client_entries ALTER COLUMN client_entry_id SET DEFAULT nextval('public.client_entries_client_entry_id_seq'::regclass);


--
-- Name: professional_entries professional_entry_id; Type: DEFAULT; Schema: public; Owner: tpl622_2
--

ALTER TABLE ONLY public.professional_entries ALTER COLUMN professional_entry_id SET DEFAULT nextval('public.professional_entries_professional_entry_id_seq'::regclass);


--
-- Data for Name: client_entries; Type: TABLE DATA; Schema: public; Owner: tpl622_2
--



--
-- Data for Name: professional_entries; Type: TABLE DATA; Schema: public; Owner: tpl622_2
--



--
-- Name: client_entries_client_entry_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl622_2
--

SELECT pg_catalog.setval('public.client_entries_client_entry_id_seq', 6, true);


--
-- Name: professional_entries_professional_entry_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl622_2
--

SELECT pg_catalog.setval('public.professional_entries_professional_entry_id_seq', 1, false);


--
-- Name: client_entries client_entries_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl622_2
--

ALTER TABLE ONLY public.client_entries
    ADD CONSTRAINT client_entries_pkey PRIMARY KEY (client_entry_id);


--
-- Name: professional_entries professional_entries_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl622_2
--

ALTER TABLE ONLY public.professional_entries
    ADD CONSTRAINT professional_entries_pkey PRIMARY KEY (professional_entry_id);


--
-- PostgreSQL database dump complete
--

