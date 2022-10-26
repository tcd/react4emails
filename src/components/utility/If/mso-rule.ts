export type MsoVersion =
    |  "9" /** Outlook 2000 - Version  9 */
    | "10" /** Outlook 2002 - Version 10 */
    | "11" /** Outlook 2003 - Version 11 */
    | "12" /** Outlook 2007 - Version 12 */
    // | "13"
    | "14" /** Outlook 2010 - Version 14 */
    | "15" /** Outlook 2013 - Version 15 */
    | "16" /** Outlook 2019 - Version 16 */

export type RuleTarget =
    | "mso"
    | "IE"

export type RuleOperator =
    | "lt"  // less-than
    | "lte" // less-than or equal
    | "gt"  // greater-than
    | "gte" // greater-than or equal
