-- Table: public.product_data

-- DROP TABLE IF EXISTS public.product_data;

CREATE TABLE IF NOT EXISTS public.product_data
(
    p_name text COLLATE pg_catalog."default" NOT NULL,
    p_id bigint NOT NULL,
    p_count bigint NOT NULL,
    p_desc text COLLATE pg_catalog."default" NOT NULL,
    p_img text COLLATE pg_catalog."default" NOT NULL,
    p_date bigint NOT NULL,
    CONSTRAINT product_data_pkey PRIMARY KEY (p_name, p_count, p_id, p_desc, p_img, p_date)
    )

    TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.product_data
    OWNER to postgres;