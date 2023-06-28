import React from 'react'
import { SliceSimulator } from '@prismicio/slice-simulator-react'
import { SliceZone } from '@prismicio/react'

import { components } from '../slices'
import state from '../.slicemachine/libraries-state.json'

export default function SliceSimulatorPage() {
  return (
    <SliceSimulator
      // eslint-disable-next-line
      sliceZone={(props) => <SliceZone {...props} components={components} />}
      state={state}
    />
  )
}
