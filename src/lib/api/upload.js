import { Form } from "../../types/form.type";
import client from "./client";

export const fetchUpload = ({ form }) => client.post(`url`, form, {});
