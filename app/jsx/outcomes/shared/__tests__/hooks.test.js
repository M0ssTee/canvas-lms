/*
 * Copyright (C) 2021 - present Instructure, Inc.
 *
 * This file is part of Canvas.
 *
 * Canvas is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import React from 'react'
import {renderHook} from '@testing-library/react-hooks'
import OutcomesContext from 'jsx/outcomes/contexts/OutcomesContext'
import {useCanvasContext} from '../hooks'

describe('useCanvasContext', () => {
  test('can return values if they are set', () => {
    const wrapper = ({children}) => (
      <OutcomesContext.Provider value={{env: {contextType: 'Account', contextId: '1'}}}>
        {children}
      </OutcomesContext.Provider>
    )
    const {result} = renderHook(() => useCanvasContext(), {wrapper})
    expect(result.current.contextType).toBe('Account')
    expect(result.current.contextId).toBe('1')
  })

  test('returns undefined if values are not set', () => {
    const wrapper = ({children}) => (
      <OutcomesContext.Provider value={{}}>{children}</OutcomesContext.Provider>
    )
    const {result} = renderHook(() => useCanvasContext(), {wrapper})
    expect(result.current.contextType).toBe(undefined)
    expect(result.current.contextId).toBe(undefined)
  })
})
