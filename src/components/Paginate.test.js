import React from 'react';
import { Table } from "antd";
import { format } from "date-fns";
import { render, fireEvent, queryByTitle } from "@testing-library/react";
import Paginate from './Paginate';

describe("Paginate", () => {
    it("rendered Pagination", () => {
        const { getByTestId } = render(<Paginate />);
        const Paginate = getByTestId("paginate");
        expect(Paginate).toBeTruthy();
      });
    });
    
 