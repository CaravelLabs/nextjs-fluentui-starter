import AppShell from '../modules/common/AppShell'
import React from 'react'
import { TextConstants } from '../modules/common/TextConstants'
import { Link, Display, LargeTitle } from '@fluentui/react-components'

function Index() {
    return (
        <AppShell>
            <div>
                <Display>{TextConstants.Title}</Display>
                <LargeTitle block>An initiative by Caravel Labs</LargeTitle>
            </div>
            <div>
                More information about{' '}
                <Link
                    href="https://react.fluentui.dev/?path=/docs/concepts-introduction--page"
                    inline
                >
                    Fluent UI React v9.0
                </Link>
                .
            </div>
        </AppShell>
    )
}

export default Index
